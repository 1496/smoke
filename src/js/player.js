(function(window, $) {
    var G = {};
    var idx = '0';
    var $player = null;
    var $layer = null;
    var pass = 'gif/';
    var effectClass = 'F1';
    var image = "";
    var keyArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

    G.init = function()
    {
        $player = $('.player');
    };

    G.makeImagePass =function(type)
    {
        image = pass + directory + '/' + type + '.gif';
    };







/*=================================
effectsの設定
=================================*/

G.modeSwich = {
    init:function()
    {
        log('ok');
    },
    F1:function(type)
    {
        //ノーマルエフェクト
        G.makeImagePass(type);
        idx++;
        var $target = $('<div class="layer F1"></div>');
        $target.css({'background-image':'url(' + image + '?'+ idx+')'});

        $player.children(0).remove();
        $player.append($target);
    },
    F2:function(type)
    {
        //smoke
        G.makeImagePass(type);

        var $target = $('<div class="layer F2"></div>');
        $target.css({'background-image':'url(' + image + ')'});

        $player.children(0).css({opacity:0}).animate({top:1},4000,function(){
            $(this).remove();
        });

        $player.prepend($target);

    },
    F3:function(type)
    {
        //refrect-smiple
        G.makeImagePass(type);
        var $target = $('<div class="layer F3"></div>');
        $target.css({'background-image':'url(' + image + ')'});

        $player.append($target);
        $('.layer:first').remove();

    },
    F4:function(type)
    {
        //refrect-slide
        G.makeImagePass(type);
        var $target = $('<div class="layer F4"></div>');

        $target.css({'background-image':'url(' + image + ')'});
        setTimeout(function(){
            $target.css({width:'50%','margin-left': '0%'});
        },50);

        setTimeout(function(){
            $('.layer:first').animate({top:1},0,function(){
                $(this).remove();
                log();
            });
        },1000)


        $player.append($target);
    },
    F5:function(type)
    {
        /*rainbow mode*/
        G.makeImagePass(type);
        idx++;
        var $target = $('<div class="layer F5"></div>');
        $target.css({'background-image':'url(' + image + '?'+ idx+'),linear-gradient(limegreen,transparent),linear-gradient(90deg,skyblue,transparent),linear-gradient(-90deg,coral,transparent)'});
        // $target.css({'background-image':'url(' + image + '?'+ idx+')'});
        $player.children(0).remove();
        $player.append($target);
    },
    F6:function(type)
    {
        /*rainbow-dark mode*/
        G.makeImagePass(type);
        idx++;
        var $target = $('<div class="layer F6"></div>');
        $target.css({'background-image':'url(' + image + '?'+ idx+'),linear-gradient(limegreen,transparent),linear-gradient(90deg,skyblue,transparent),linear-gradient(-90deg,coral,transparent)'});
        // $target.css({'background-image':'url(' + image + '?'+ idx+')'});
        $player.children(0).remove();
        $player.append($target);
    },
    F7:function(type)
    {
        log('F7');
    },
    F8:function(type)
    {
        log('F8');
    },
    F9:function(type)
    {
        log('F9');
    },
    F10:function(type)
    {
        log('F10');
    },
    F11:function(type)
    {
        log('F11');
    },
    F12:function(type)
    {
        log('F12');
    }
}











    window.PLAYER = G;

})(window, jQuery);
