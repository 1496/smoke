var _DATA_ = {};
var keyArray = ['q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m'];
var $bt_func = null;


(function(window, $) {
    var G = {};

    G.init = function()
    {
        $bt_func = $('.fucntionKeyArea div');

        //まずはF1を表示
        $('.controller_preview').html(G.setHtml('F1'));


        document.onkeydown = function (e)
        {
            G.changeKeyDown();
        };

        $bt_func.click(G.changeClick);

        var html = '';

    };

    G.changeClick = function()
    {
        var html = '';
        var F = '';

        F = $(this).attr('class');
        html = G.setHtml(F);
        $('.controller_preview').html(html);

        G.changeActive(F);

    };

    G.changeKeyDown = function(e)
    {
        // InternetExplorer 用
        if (!e) e = window.event;
        var html = '';
        var key_code = e.keyCode;
        var keyObj = {112:'F1',113:'F2',114:'F3',115:'F4',116:'F5',117:'F6',118:'F7',119:'F8',120:'F9',121:'F10',122:'F11',123:'F12',124:'F13',125:'F14',126:'F15'};

        key = keyObj[key_code];

        //undefinedなら処理を止める
        if(key === undefined ) return false;


        html = G.setHtml(key);
        $('.controller_preview').html(html);

        G.changeActive(key);
    };

    G.changeActive = function(F)
    {
        //アクティブを切り替え
        $bt_func.each(function(){
            $(this).removeClass('active');

            log($(this).hasClass(F));

            if($(this).hasClass(F))
            {
                $(this).addClass('active');
            }
        });
    };

    G.setHtml = function(str)
    {
        var html = '';
        html += '<div class="wrap"><h2>gif/'+str+'</h2>';
        for (var i = 0; i < keyArray.length; i++) {
            
            if(keyArray[i] == 'a' || keyArray[i] == 'z')
            {
                html += '<br><p class="key margin-'+keyArray[i]+'" style="background-image:url(gif/'+str+'/'+keyArray[i]+'.gif);"><span>'+keyArray[i].toUpperCase()+'</span></p>';
            }
            else
            {
                html += '<p class="key" style="background-image:url(gif/'+str+'/'+keyArray[i]+'.gif);"><span>'+keyArray[i].toUpperCase()+'</span></p>';
            }
            
            
        };
        html += '</div>';

        return html;
    };



    window.keyboard = G;

})(window, jQuery);








 // ↓ページすべての画像を読み込んだら
$(window).load(function()
{
     keyboard.init();
});



function log() {
    if(typeof console == "undefined") return;

    var args = jQuery.makeArray(arguments);
    console.log.apply(console, args);
}

