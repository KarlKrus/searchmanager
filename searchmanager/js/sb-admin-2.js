$(document).ready(function($jQ) {
    $jQ(window).unbind();
    $jQ('#side-menu').metisMenu();
    $jQ('.stopPropagation').click(function(e) {
        e.stopPropagation();
    });
    $jQ(window).bind("load resize", function() {
        var collapse = $jQ('div.navbar-collapse');
        var height = $jQ(this).height();
        var base = $jQ('body');
        var sideMenu = $jQ('#side-menu');
        var width = ($jQ(this).width());
        if (width > 1200) {
            var colpse = collapse.find('.collapse-activator');
            colpse.removeClass('collapse-disabled');
            base.find('.collapse-nav').removeClass('collapse-nav-hide');
            base.removeClass('sidebar-close');
            colpse.unbind('click');
            colpse.bind('click', function() {
                if (base.hasClass("sidebar-close") === false) {
                    base.addClass('sidebar-close');
                    sideMenu.tooltip({
                        selector: "[data-toggle=tooltip]",
                        container: "body"
                    });
                    $.cookies.set('menu', 'close');
                }
                else {
                    base.removeClass('sidebar-close');
                    sideMenu.tooltip('destroy');
                    $.cookies.del('menu');
                }
            });
            if ($.cookies.get('menu') === 'close') {
                sideMenu.tooltip({
                    selector: "[data-toggle=tooltip]",
                    container: "body"
                });
                base.addClass('sidebar-close');
            }
        } else {
            base.addClass('sidebar-close');
            collapse.find('.collapse-activator').unbind().addClass('collapse-disabled');
            base.find('.collapse-nav').addClass('collapse-nav-hide');
            sideMenu.tooltip({
                selector: "[data-toggle=tooltip]",
                container: "body"
            });
        }
        var sameHeight = base.find('#draggable-height').height();
        base.find('#droppable-height').height(sameHeight);
        base.find('#droppable-obj').height(sameHeight);

        base.find('#help').click(function() {
            base.addClass('tour');
            bootstro.start('.bootstro', {
                onExit: function() {
                    base.removeClass('tour');
                }
            });
        });
        $jQ(document).ready(function() {
            base.addClass('loaded');
            base.find('#radio-switch.disabled').click(function() {
                return false;
            });
            base.find('#radio-switch .btn-toggle [type="radio"]').change(function() {
                var base = $jQ(this);
                $jQ(this).parent().parent().find('.btn-default').removeClass('btn-primary');
                if (base.is(':checked') === true) {
                    base.parent().addClass('btn-primary');
                }
            });
            base.find('#radio-switch .btn-toggle [type="radio"]').filter(function() {
                var base = $jQ(this);
                if (base.is(':checked') === true) {
                    base.parent().addClass('btn-primary');
                }
            });
            base.find('.elm-scroll').slimScroll({
                alwaysVisible: false,
                railVisible: true
            });
            base.find('.wrapper .sidebar-nav').css('height', height - 50).slimScroll({
                size: '8px',
                distance: '0px'
            });
        });
    });
    var base = $jQ('.navbar-left');
    if (window.location.hash) {
        var urlHash = window.location.hash;
        var logo = base.find('[href="' + urlHash + '"] img').attr('src');
        base.find('.dropdown-toggle .current-mall').attr('src', logo);
    }
    base.find('.dropdown-menu a').click(function() {
        var _this = $jQ(this);
        var logo = _this.find('img').attr('src');
        base.find('.dropdown-toggle .current-mall').attr('src', logo);
    });
    //Sample pagination
    $jQ('.pagination a').bind('click', function() {
        var _parent = $jQ(this).parent().parent().parent().parent().parent().parent().parent().parent().parent();
        _parent.find('.panel-body').addClass('panel-loading');
        setTimeout(function() {
            $jQ('.wrapper .panel-body').removeClass('panel-loading');
        }, 1000);
        return false;
    });
    //Sample page loader
    $jQ('.wrapper .panel-body').addClass('panel-loading');
    setTimeout(function() {
        $jQ('.wrapper .panel-body').removeClass('panel-loading');
    }, 1000);
    //disabled links
    $jQ('[href="maintenance.html"],[href="exclusives.html"] ,[href="reports.html"] , [href="discountsale.html"], [href="newlyreleased.html"] , [href="security.html"]').click(function() {
        alert('Page will be available soon');
        return false;
    });
});