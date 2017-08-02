var PCM = PCM || {};
PCM.productAnim = (function($jQ) {
    var elm = $jQ('#wrapper');
    var init = function() {
        productBrowser();
        popOver();
        preview();
        ellipsisContent();
        productScroll();
    };
    var popOver = function() {
        elm.find('.product-name').popover({
            trigger: 'hover',
            placement: 'top',
            container: 'body',
            hide: 100
        }).click(function() {
            $jQ(this).popover('hide');
        });
    };
    var productBrowser = function() {
        elm.find('.draggable-item').draggable({
            handle: '.start-move',
            cursor: 'move',
            connectToSortable: '#droppable-obj',
            helper: 'clone',
            revert: 'invalid',
            containment: '#page-wrapper',
            zIndex: 10,
            start: function(event, ui) {
                var _this = $jQ(this).find('.product-name');
                _this.html(_this.attr('data-content'));
            }
        });
        elm.find('#droppable-obj').droppable({
            accept: '.draggable-item',
            connectWith: '.draggable-item',
            activeClass: 'highlight',
            drop: function(event, ui) {
                var _this = $jQ(this).find('.product-name');
                _this.html(_this.attr('data-content'));
                popOver();
                elm.find('.droppable-item .calendar').datepicker({
                    showButtonPanel: true, closeText: 'No Expiration', onClose: function(dateText, inst) {
                        if ($(window.event.srcElement).hasClass('ui-datepicker-close')) {
                            $jQ(this).val('No Expiration');
                        }
                    }
                    
                });
                elm.find('.droppable-item .btn-danger').click(function() {
                    var base = $jQ(this);
                    base.parent().parent().parent().parent().slideUp(200, function() {
                        $jQ(this).remove();
                    });
                });
                elm.find('#droppable-obj .product-name ,#droppable-obj .prod-description').ellipsis({
                    ellipsis: '... ',
                    wrap: 'word',
                    after: null,
                    watch: true
                });
                productScroll();
            }
        });
        elm.find('#droppable-obj').sortable({
            handle: '.tab',
            connectWith: '#droppable-obj',
            cursor: 'n-resize',
            axis: 'y'
        });
    };
    var productScroll = function() {
        elm.find('.elm-scroll-auto').slimScroll({
            alwaysVisible: false,
            railVisible: true
        });
    };
    var preview = function() {
        elm.find('#view-less').click(function() {
            var base = $(this);
            if (base.find('#view-btn').html() === 'View All') {
                previewItem();
                elm.find('#hide-pager').hide();
                base.find('#view-btn').html('View Less');
            }
            else {
                defaultView();
                elm.find('#hide-pager').show();
                base.find('#view-btn').html('View All');
            }
        });
        var defaultView = function() {
            elm.find('.modal-scroll').slimScroll({destroy: true});
        };
        var previewItem = function() {
            elm.find('.modal-scroll').slimScroll({
                railVisible: true
            });
        };
    };
    var ellipsisContent = function() {
        elm.find('.product-name ,.prod-description').ellipsis({
            ellipsis: '... ',
            wrap: 'word',
            after: null,
            watch: true
        });
    };
    return{
        init: init
    };
})(jQuery);
