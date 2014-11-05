var directory = '0';  
var mode = 'F1'; 


(function(window, $) {
    var G = {};
    var widnwoHeight = 0;

    G.init = function()
    {
        G.setHeight();
        PLAYER.init();
        CONTROLER.init();
    };

    G.setHeight =function()
    {
        widnwoHeight = $(window).height();
        $('.player').css({height:widnwoHeight});
    };



    window.smoke = G;

})(window, jQuery);








 // ↓ページすべての画像を読み込んだら
$(window).load(function()
{
     smoke.init();
});



function log() {
    if(typeof console == "undefined") return;

    var args = jQuery.makeArray(arguments);
    console.log.apply(console, args);
}


/*スクロールの値を取得*/
function getScrollTop(){ ///  verifica el calculo total en pixeles de toda la pagina
    if(typeof pageYOffset!= 'undefined')
    {
        $('#wirhe').text(pageYOffset);

        //most browsers
        return pageYOffset;
    }
    else
    {
        var B= document.body; //IE 'quirks'
        var D= document.documentElement; //IE with doctype
        D= (D.clientHeight)? D: B;
        $('#wirhe').text(D.scrollTop);
        return D.scrollTop;
    }
}