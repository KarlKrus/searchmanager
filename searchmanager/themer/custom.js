var PCM = PCM || {};
PCM.theme = (function($jQ) {
    var init = function() {
        picker();
        colorBox();
    };
    var colorBox = function(){
      var color = $('.pick-color'); 
      color.find('a').filter(function(){
         var self =  $(this);
          self.css('background',self.attr('href'));
      });
      color.find('a').click(function(e){
         var self =  $(this);
         $('.color').val(self.attr('href')).css({
             'background':self.attr('href'),
             'color':'#FFF'
         });
         e.preventDefault();
      });
    };
    var darkenLightenColor = function(col, amt) {
        var usePound = false;
        if (col[0] === "#") {
            col = col.slice(1);
            usePound = true;
        }
        var num = parseInt(col, 16);
        var r = (num >> 16) + amt;
        if (r > 255)
            r = 255;
        else if (r < 0)
            r = 0;
        var b = ((num >> 8) & 0x00FF) + amt;
        if (b > 255)
            b = 255;
        else if (b < 0)
            b = 0;
        var g = (num & 0x0000FF) + amt;
        if (g > 255)
            g = 255;
        else if (g < 0)
            g = 0;
        return (usePound ? "#" : "") + (g | (b << 8) | (r << 16)).toString(16);
    };

    var themer = function(dark, org, mid, light, lighter, lightiest, xlighter) {
        var customTheme = '';
        customTheme += '.custom-theme .wrapper{';
        customTheme += '    background-color: ' + org + ';';
        customTheme += '}';
        customTheme += '.custom-theme .navbar-default {';
        customTheme += '    background-color: #FFF;';
        customTheme += '    border-color: #e7e7e7;';
        customTheme += '}';
        customTheme += '.custom-theme a,';
        customTheme += '.custom-theme .btn,';
        customTheme += '.custom-theme .navbar.main li,';
        customTheme += '.custom-theme .navbar.main .caret {';
        customTheme += '    -webkit-transition: all 300ms linear;';
        customTheme += '    -moz-transition: all 300ms linear;';
        customTheme += '    -o-transition: all 300ms linear;';
        customTheme += '    -ms-transition: all 300ms linear;';
        customTheme += '   transition: all 300ms linear;';
        customTheme += '}';
        customTheme += '.custom-theme .navbar-left {';
        customTheme += '    margin-left: 0px;';
        customTheme += '}';
        customTheme += '.custom-theme .navbar-brand{color: ' + dark + ';}';
        customTheme += '.custom-theme *{ ';
        customTheme += '    border-radius: 0px !important;';
        customTheme += '    box-shadow: none;';
        customTheme += '}';
        customTheme += '.custom-theme #page-wrapper {';
        customTheme += '    background: #FFF;';
        customTheme += '    border-color: ' + dark + ';';
        customTheme += '}';
        customTheme += '.custom-theme .navbar-right > li > a{';
        customTheme += '    color: ' + dark + ';';
        customTheme += '}';
        customTheme += '.custom-theme .dropdown-menu>li>a:hover,';
        customTheme += '.custom-theme .dropdown-menu>li>a:focus {';
        customTheme += '    color: ' + lightiest + ';';
        customTheme += '    text-decoration: none;';
        customTheme += '    background-color: ' + org + ';';
        customTheme += '}';
        customTheme += '.custom-theme .navbar-left .dropdown{';
        customTheme += '    height: 50px;';
        customTheme += '    background-color: #FFF;';
        customTheme += '    border-bottom: 1px solid #ddd;';
        customTheme += '}';
        customTheme += '.custom-theme .navbar-right .open>a, ';
        customTheme += '.custom-theme .navbar-right .open>a:hover, ';
        customTheme += '.custom-theme .navbar-right .open>a:focus {';
        customTheme += '    background-color: ' + org + ';';
        customTheme += '    border-color: #428bca;';
        customTheme += '    color: ' + lightiest + ';';
        customTheme += '}';
        customTheme += '.custom-theme .nav.navbar-right li a:hover,';
        customTheme += '.custom-theme .nav.navbar-right li a:focus{';
        customTheme += '}';
        customTheme += '.custom-theme #side-menu{ ';
        customTheme += '    background-color: ' + org + ';';
        customTheme += '}';
        customTheme += '.custom-theme .nav > li > a:hover, .custom-theme .nav > li > a:focus{';
        customTheme += '    background-color: ' + org + ';';
        customTheme += '}';
        customTheme += '.custom-theme #side-menu li{';
        customTheme += '    border-bottom: 1px solid ' + mid + ';';
        customTheme += '}';
        customTheme += '.custom-theme #side-menu li a:hover{';
        customTheme += '    background-color: ' + dark + ';';
        customTheme += '}';
        customTheme += '.custom-theme .sidebar ul li a.active {';
        customTheme += '    background-color: ' + dark + ';';
        customTheme += '}';
        customTheme += '.custom-theme #side-menu li a {';
        customTheme += '    color: ' + lightiest + ';';
        customTheme += '}';
        customTheme += '.custom-theme #side-menu .nav>li>a:hover, ';
        customTheme += '.custom-theme #side-menu .nav>li>a:focus {';
        customTheme += '    background-color: ' + dark +  ' !important;';
        customTheme += '}';
        customTheme += '.custom-theme #side-menu li a.active,';
        customTheme += '.custom-theme #side-menu li a.active span{';
        customTheme += '    color: #FFF !important;';
        customTheme += '}';
        customTheme += '.custom-theme #side-menu li .fa{';
        customTheme += '    color: ' + lightiest + ';';
        customTheme += '} ';
        customTheme += '.custom-theme .collapse-activator a,';
        customTheme += '.custom-theme .collapse-activator span,';
        customTheme += '.custom-theme .collapse-activator .fa{';
        customTheme += '    color: ' + mid + ' !important;';
        customTheme += '}';
        customTheme += '.custom-theme .modal-footer,';
        customTheme += '.custom-theme .breadcrumb,';
        customTheme += '.custom-theme .list-head,';
        customTheme += '.custom-theme .popover-title,';
        customTheme += '.custom-theme .modal-header,';
        customTheme += '.custom-theme .panel-default .panel-heading,';
        customTheme += '.custom-theme .panel-footer{';
        customTheme += '    color: ' + dark + ' !important;';
        customTheme += '}';
        customTheme += '.custom-theme .modal-footer,';
        customTheme += '.custom-theme .table-bordered ,';
        customTheme += '.custom-theme .table-bordered>thead>tr>th, ';
        customTheme += '.custom-theme .table-bordered>tbody>tr>th, ';
        customTheme += '.custom-theme .table-bordered>tfoot>tr>th, ';
        customTheme += '.custom-theme .custom-theme table-bordered>thead>tr>td, ';
        customTheme += '.custom-theme .table-bordered>tbody>tr>td, ';
        customTheme += '.custom-theme .table-bordered>tfoot>tr>td';
        customTheme += '.custom-theme hr,';
        customTheme += '.custom-theme .list-group,';
        customTheme += '.custom-theme .list-group .list-group-item,';
        customTheme += '.custom-theme .popover-title,';
        customTheme += '.custom-theme .popover,';
        customTheme += '.custom-theme .dropdown-menu,';
        customTheme += '.custom-theme .breadcrumb,';
        customTheme += '.custom-theme .list-head,';
        customTheme += '.custom-theme .modal-header,';
        customTheme += '.custom-theme .panel-default .panel-heading,';
        customTheme += '.custom-theme .panel-footer,';
        customTheme += '.custom-theme .panel-default{';
        customTheme += '    border-color: #ccc;';
        customTheme += '}';
        customTheme += '.custom-theme .dropdown-menu .divider{';
        customTheme += '    background-color: #ccc !important;';
        customTheme += '}';
        customTheme += '.custom-theme .modal-header .close,.custom-theme .breadcrumb a{';
        customTheme += '    color:' + org + ' !important;';
        customTheme += '}';
        customTheme += '.custom-theme .slimScrollBar{ ';
        customTheme += '    background-color: ' + dark + ' !important;';
        customTheme += '    opacity: 0.8 !important;';
        customTheme += '}';
        customTheme += '.custom-theme .modal-backdrop{background-color: #000;}';
        customTheme += '.custom-theme .nav li .nav-second-level {';
        customTheme += '    background-color: ' + org + ';';
        customTheme += '    border-color: '+ dark + ' ';
        customTheme += '}';
        customTheme += '.custom-theme .nav-tabs{';
        customTheme += '    margin: -16px;';
        customTheme += '}';
        customTheme += '.custom-theme .tab-content>.tab-pane {';
        customTheme += '    margin-top: 26px;';
        customTheme += '}';
        customTheme += '.custom-theme .modal .modal-content{';
        customTheme += '    -webkit-box-shadow: 0 0 10px 1px rgba(0,0,0,0.2);';
        customTheme += '    -moz-box-shadow: 0 0 10px 1px rgba(0,0,0,0.2);';
        customTheme += '    box-shadow: 0 0 10px 1px rgba(0,0,0,0.2);';
        customTheme += '}';
        customTheme += '.custom-theme .wrapper .you {';
        customTheme += '    background-color: #f5f5f5;';
        customTheme += '}';
        customTheme += '.custom-theme .navbar-right .nav .open>a, ';
        customTheme += '.custom-theme .navbar-right .nav .open>a:hover,';
        customTheme += '.custom-theme .navbar-right .nav .open>a:focus {';
        customTheme += '    background-color: ' + org + ';';
        customTheme += '    border-color: #ccc;';
        customTheme += '    color: ' + lightiest + ';';
        customTheme += '}';
        customTheme += '.custom-theme .navbar-right .nav>li>a:hover,';
        customTheme += '.custom-theme .navbar-right .nav>li>a:focus {';
        customTheme += '    background-color: ' + dark + ';';
        customTheme += '    border-color: #ccc;';
        customTheme += '    color: ' + lightiest + ';';
        customTheme += '}';
        $jQ('.theme-changer').html(customTheme);
        $jQ('body').addClass('custom-theme');
        $jQ('.css-code').html(customTheme);
    };
    var picker = function() {
        var base = $jQ('body');

        base.find('.primaryTheme').click(function() {
            $jQ('.css-code').html('');
            $jQ('.theme-changer').html('');
            base.removeClass('primary-theme');
            base.removeClass('red-theme');
            base.removeClass('violet-theme');
            base.addClass('primary-theme');
        });
        base.find('.redTheme').click(function() {
            $jQ('.css-code').html('');
            $jQ('.theme-changer').html('');
            base.removeClass('primary-theme');
            base.removeClass('red-theme');
            base.removeClass('violet-theme');
            base.addClass('red-theme');
        });
        base.find('.violetTheme').click(function() {
            $jQ('.css-code').html('');
            $jQ('.theme-changer').html('');
            base.removeClass('primary-theme');
            base.removeClass('red-theme');
            base.removeClass('violet-theme');
            base.addClass('violet-theme');
        });
        base.find('.apply').click(function() {
            base.removeClass('primary-theme');
            base.removeClass('red-theme');
            base.removeClass('violet-theme');
            var i = base.find('.color').val();
            var a = darkenLightenColor(i, -30);
            var b = darkenLightenColor(i, 0);
            var c = darkenLightenColor(i, 50);
            var d = darkenLightenColor(i, 100);
            var e = darkenLightenColor(i, 150);
            var fa = darkenLightenColor(i, 165);
            var g = darkenLightenColor(i, 180);
            themer(a, b, c, d, e, fa, g);
        });
    };
    return{init: init};
})(jQuery);
