var PCM = PCM || {};
PCM.previewPagination = (function($jQ) {
    var elm = $jQ('#wrapper');
    var init = function() {
        prevPage();
    };
    var prevPage = function() {
       var rowLen = (elm.find('.col-show-grid #page-row').length);
    };

    return{
        init: init
    };
})(jQuery);

