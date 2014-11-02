(function(window, $) {
    var G = {};
    var $player = null;
    var $layer = null;
    var pass = 'gif/';
    var effectClass = 'F1';

    G.init = function()
    {
        $player = $('.player');
    };

    G.changeImage =function(type)
    {
        var $target = $('<div class="layer '+ effectClass +'"></div>');
        $target.css({'background-image':'url('+pass + directory + '/' + type + '.gif' + ')'});

        $player.children(0).css({opacity:0}).animate({top:1},4000,function(){
            $(this).remove();
        });

        $player.prepend($target);
    };







/*=================================
effectsの設定
=================================*/

G.effects = {
    init:function()
    {
        log('ok');
    },
    F1:function()
    {
        //ノーマルエフェクト
        effectClass = 'F1';
    },
    F2:function()
    {
        //smoke effect
        effectClass = 'F2';
    },
    F3:function()
    {
        log('F3');
    },
    F4:function()
    {
        log('F4');
    },
    F5:function()
    {
        log('F5');
    },
    F6:function()
    {
        log('F6');
    },
    F7:function()
    {
        log('F7');
    },
    F8:function()
    {
        log('F8');
    },
    F9:function()
    {
        log('F9');
    },
    F10:function()
    {
        log('F10');
    },
    F11:function()
    {
        log('F11');
    },
    F12:function()
    {
        log('F12');
    }
}











    window.PLAYER = G;

})(window, jQuery);
