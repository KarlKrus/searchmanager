/* Bootstrap Notification
 * Required Bootstrap css
 * Required Awesome Font
 */
(function($jQ) {
    $jQ.notification = function(options, callback) {
        var _base = $jQ('body');
        var settings = $jQ.extend({
            message: 'Error',
            type: 'danger',
            inSpd: '200',
            outSpd: '200',
            pause: '2000',
            minWid: '350'
        }, options);
        var icon = 'fa-warning';
        var _noti = _base.find('.notification-message');
        if (_noti.length === 0) {
            if (settings.type === 'danger') {
                icon = 'fa-exclamation';
            }
            else if (settings.type === 'success') {
                icon = 'fa-check';
            }
            else if (settings.type === 'warning') {
                icon = 'fa-warning';
            }
            else if (settings.type === 'info') {
                icon = 'fa-info-circle';
            }
            _base.append('<div class="noti-olay"></div><div class="notification-message alert alert-' + settings.type + '"><i class="fa ' + icon + '"></i> ' + settings.message + '</div>');
            var obj = $jQ('.notification-message');
            var oly = $jQ('.noti-olay');
            var width = $jQ(window).width();
            oly.css({
                'position': 'fixed',
                'z-index': '9999',
                'top': '0px',
                'height': '100%',
                'width': '100%',
                'background': '#000',
                'opacity': 0
            }).animate({'opacity': 0.3}, settings.inSpd).delay(settings.pause).animate({'opacity': 0}, settings.inSpd, function() {
                $jQ(this).remove();
            });
            obj.css({
                'position': 'fixed',
                'z-index': '9999',
                'top': '-70px',
                'max-width': settings.notiWid,
                'box-shadow': '0px 0px 9px #888',
                '-webkit-box-shadow': '0px 0px 9px #888',
                '-ms-box-shadow': '0px 0px 9px #888',
                '-o-box-shadow': '0px 0px 9px #888'
            }).css({
                'left': ((width / 2) - (obj.width() / 2))
            }).animate({top: '40%'}, settings.inSpd).delay(settings.pause).animate({top: '-70px'}, settings.outSpd, function() {
                $jQ(this).remove();
                if (typeof callback === 'function') { // make sure the callback is a function
                    callback.call(this); // brings the scope to the callback
                }
            });
            $jQ(window).resize(function() {
                var width = $jQ(window).width();
                obj.css({
                    'left': ((width / 2) - (obj.width() / 2))
                });
            });
        }
    };
}(jQuery));