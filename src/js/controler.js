(function(window, $) {
    var G = {};
    var key = "";
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

        
        var keyObj = {48:'0',49:'1',50:'2',51:'3',52:'4',53:'5',54:'6',55:'7',56:'8',57:'9',65:'a',66:'b',67:'c',68:'d',69:'e',70:'f',71:'g',72:'h',73:'i',74:'j',75:'k',76:'l',77:'m',78:'n',79:'o',80:'p',81:'q',82:'r',83:'s',84:'t',85:'u',86:'v',87:'w',88:'x',89:'y',90:'z',112:'F1',113:'F2',114:'F3',115:'F4',116:'F5',117:'F6',118:'F7',119:'F8',120:'F9',121:'F10',122:'F11',123:'F12',124:'F13',125:'F14',126:'F15'};

        
        key = keyObj[key_code];


        //undefinedなら処理を止める
        if(key === undefined ) return false;

        //アルファベット
        if(key.match(/[^0-9]/g) != null && key.length <= 1)
        {
            PLAYER.changeImage(key);
        }
        //数字
        else if(key.match(/[^0-9]/g) == null)
        {
            G.changeDirectory(key);
        }
        //ファンクションキー
        else
        {
            PLAYER.effects[key]();
        }
        
    };

    G.changeDirectory = function(key)
    {
        directory = key;
    };

















    window.CONTROLER = G;

})(window, jQuery);
