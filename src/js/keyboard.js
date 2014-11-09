var _DATA_ = {};
var keyArray = ['q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m'];


(function(window, $) {
    var G = {};

    G.init = function()
    {

        var str = '';
        for (var i = 1; i <= 12; i++) {
            str += G.setHtml('F'+i)
        }
        $('.controller_preview').html(str);
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

