(function($){

    $(function(){
        $('.PageListActionEdit a').live("click",function(e){
            e.preventDefault();
            $(this).addClass("iframe").attr("href",$(this).attr('href')+"&modal=1");
            initFancybox($(this));
        });
        $('.PageListActionView a').live("click",function(e){
            e.preventDefault();
            $(this).addClass("iframe").attr("href",$(this).attr('href'));
            initFancybox($(this));
        });
        $('.PageListActionNew a').live("click",function(e){
            e.preventDefault();
            $(this).addClass("iframe").attr("href",$(this).attr('href')+"&modal=1");
            initFancybox($(this));
        });
        $('.PageListActionCopy a').live("click",function(e){
            e.preventDefault();
            $(this).addClass("iframe").attr("href",$(this).attr('href')+"&modal=1");
            initFancybox($(this));
        });
        $('#topnav a').live("click",function(e){
            var href = $(this).attr('href');
            // not on "pages" link
            if(href == "") {
                e.preventDefault();
                return true;
            }
            if(href == config.urls.admin + "page/") return true;
            if(href == "/") return true;
            if(href.indexOf("?") >= 0){
                e.preventDefault();
                href += "&modal=1&iframe";
            } else {
                e.preventDefault();
                href += "?modal=1&iframe";
            }
            $(this).addClass("iframe").attr("href",href);
            initFancybox($(this));
        });
    });

    var initFancybox = function($link){
        var h = $(window).height()-65;
        var w = $(window).width() > 1150 ? 1150 : $(window).width()-100;
        $link.fancybox({
            hideOnContentClick: false,
            centerOnScroll: false,
            frameWidth: w,
            frameHeight: h
        }).trigger('click');
    };

})(jQuery);