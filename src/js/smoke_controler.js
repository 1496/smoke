(function(window, $) {
    var G = {};
    G.init = function()
    {
        document.onkeydown = function (e)
        {
            G.getType();
        }

    };

    G.getType = function(e)
    {        
        // InternetExplorer 用
        if (!e) e = window.event;

        // ------------------------------------------------------------
        // 入力情報を取得
        // ------------------------------------------------------------
        // キーコード
        var key_code = e.keyCode;
        // Shiftキーの押下状態
        var shift_key = e.shiftKey;
        // Ctrlキーの押下状態
        var ctrl_key = e.ctrlKey;
        // Altキーの押下状態
        var alt_key = e.altKey;

        var key = "";
        var keyObj = {48:'0',49:'1',50:'2',51:'3',52:'4',53:'5',54:'6',55:'7',56:'8',57:'9',65:'a',66:'b',67:'c',68:'d',69:'e',70:'f',71:'g',72:'h',73:'i',74:'j',75:'k',76:'l',77:'m',78:'n',79:'o',80:'p',81:'q',82:'r',83:'s',84:'t',85:'u',86:'v',87:'w',88:'x',89:'y',90:'z'};

        PLAYER.changeImage(keyObj[key_code]);    
        
    };




    window.CONTROLER = G;

})(window, jQuery);

