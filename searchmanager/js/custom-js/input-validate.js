var PCM = PCM || {};
PCM.inputValidate = (function($jQ) {
    var elm = $jQ('#wrapper');
    var init = function() {
        numOnly();
        inputError();
        userRoleUpdate();
        productGrp();
    };
    var numOnly = function() {
        elm.find('input.page-number').bind('keydown blur', function(e) {
            var base = $jQ(this);
            if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1
                    || (e.keyCode === 65 && e.ctrlKey === true)
                    || (e.keyCode >= 35 && e.keyCode <= 39)) {
                return;
            }
            if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
                base.tooltip({
                    container: 'body',
                    title: 'Number only',
                    template: '<div class="error tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>'
                }).tooltip('show');
                e.preventDefault();
            }
            else {
                base.tooltip('destroy');
            }
        });
        $jQ(window).resize(function() {
            elm.find('input.page-number').tooltip('hide');
        });

    };
    var inputError = function() {
        elm.find('#searchInput').bind('keydown blur', function(e) {
            var code = e.keyCode || e.which;
            var base = $jQ(this);
            if (code === 13 && base.val() === '') {
                base.parent().addClass('has-error');
                base.tooltip({
                    container: 'body',
                    title: 'Search is required',
                    template: '<div class="error tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>'
                }).tooltip('show');
            }
            else {
                base.parent().removeClass('has-error');
                base.tooltip('destroy');
            }
        });
        elm.find('#searchInput').parent().find('.btn').click(function() {
            var base = $jQ(this);
            var input = base.parent();
            var search = input.parent().find('#searchInput');
            if (search.val() === '') {
                search.tooltip({
                    container: 'body',
                    title: 'Search is required',
                    template: '<div class="error tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>'
                }).tooltip('show');
                input.parent().addClass('has-error');
                search.focus();
            }
            else {
                input.parent().removeClass('has-error');
                search.tooltip('destroy');
            }
        });
        $jQ(window).resize(function() {
            elm.find('#searchInput').tooltip('hide');
        });
    };
    var notify = function() {
        $jQ.notification({
            message: 'Search required',
            type: 'danger'
        });
    };
    var userRoleUpdate = function() {
        elm.find('.user-role-update').click(function() {
            $.notification({
                message: 'User roles has been updated',
                type: 'success', //success, info, warning, danger
                pause: '5000'
            });
        });
    };
    var productGrp = function() {
        $jQ('#prod-group').validate({
            rules: {
                grpName: {required: true},
                grpCategory: {required: true}
            },
            messages: {
                grpName: {required: "<i class='fa fa-exclamation'></i> Group Name is required"},
                grpCategory: {required: "<i class='fa fa-exclamation'></i> Category is required"}
            },
            tooltip_options: {
                grpName: {html: true},
                grpCategory: {html: true}
            },
            submitHandler: function(form) {
                $jQ.notification({
                    message: 'Success',
                    type: 'success'
                }, function() {
                    form.submit();
                });
                return false;
            }
        });
    };
    return{
        init: init
    };
})(jQuery);
$(document).ready(function() {
    PCM.inputValidate.init();
});