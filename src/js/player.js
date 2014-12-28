(function(window, $) {
    var G = {};
    var idx = '0';
    var $player = null;
    var $layer = null;
    var $effectsLayer = null;
    var pass = 'gif/';
    var image = "";
    var keyCodeArray = [81,87,69,82,84,89,85,73,79,80,65,83,68,70,71,72,74,75,76,90,88,67,86,66,78,77];
    
    G.init = function()
    {
        $player = $('.player');
        $effectsLayer = $('.effectsLayer');
    };

    G.makeImagePass =function(key)
    {
        
    };

    G.autoPlay = function()
    {
        var i = 0;
        setInterval(changeGif,2000);



        function changeGif()
        {
            var e = $.Event('keydown', { keyCode: keyCodeArray[i]});
            $(window).trigger(e);

            if( keyCodeArray.length - 1 <= i )
            {
                i = 0;
            }
            else
            {
                i++;
            }
        };
    };





/*----------------------------------------
GIFの再生の設定
再生するときに今設定されている
再生モードによって再生が行われる
----------------------------------------*/

G.swichGIF = {
    init:function(key)
    {
        
    },
    changeEffect:function()
    {
        $('.layer:last').addClass('fadeIn');
    },
    changeImagePass:function(key)
    {
        image = pass + _DATA_.directory + '/' + key + '.gif';
    },
    mode1:function(key)
    {
        //ノーマルエフェクト
        idx++;
        var $target = $('<div class="layer '+_DATA_.mode+'"></div>');
        $target.css({'background-image':'url(' + image +')' + G.colorModeCss[_DATA_.nowColorMode]})
        .removeClass('up').removeClass('left').removeClass('down').removeClass('right')
        .addClass(_DATA_.nowColorMode);


        $player.children(0).remove();

        $player.append($target);
    },
    mode2:function(key)
    {
        //ノーマルエフェクト
        idx++;
        var $target = $('<div class="layer '+_DATA_.mode+'"></div>');
        $target.css({'background-image':'url(' + image + ')' + G.colorModeCss[_DATA_.nowColorMode]})
        .removeClass('up').removeClass('left').removeClass('down').removeClass('right')
        .addClass(_DATA_.nowColorMode);

        $player.children(0).css({opacity:0}).animate({top:1},4000,function(){
            $(this).remove();
        });

        $player.prepend($target);
    },
    mode3:function(key)
    {
        //smoke
        var $target = $('<div class="layer '+_DATA_.mode+'"></div>');
        $target.css({'background-image':'url(' + image + ')' + G.colorModeCss[_DATA_.nowColorMode]})
        .removeClass('up').removeClass('left').removeClass('down').removeClass('right')
        .addClass(_DATA_.nowColorMode);

        $player.children(0).css({opacity:0}).animate({top:1},4000,function(){
            $(this).remove();
        });

        $player.prepend($target);

    },
    mode4:function(key)
    {
        //refrect-smiple
        var $target = $('<div class="layer '+_DATA_.mode+'"></div>');
        $target.css({'background-image':'url(' + image + ')' + G.colorModeCss[_DATA_.nowColorMode]})
        .removeClass('up').removeClass('left').removeClass('down').removeClass('right')
        .addClass(_DATA_.nowColorMode);

        $player.append($target);
        $('.layer:first').remove();

    },
    mode5:function(key)
    {
        //refrect-slide
        var $target = $('<div class="layer '+_DATA_.mode+'"></div>');

        $target.css({'background-image':'url(' + image + ')' + G.colorModeCss[_DATA_.nowColorMode]})
        .removeClass('up').removeClass('left').removeClass('down').removeClass('right')
        .addClass(_DATA_.nowColorMode);

        setTimeout(function(){
            $target.css({width:'50%','margin-left': '0%'});
        },50);

        setTimeout(function(){
            $('.layer:first').animate({top:1},0,function(){
                $(this).remove();
            });
        },1000)
        $player.append($target);
    },
    mode6:function(key)
    {
        return false;
    },
    mode7:function(key)
    {
        return false;
    },
    mode8:function(key)
    {
        return false;
    },
    mode9:function(key)
    {
        return false;
    }
}


/*---------------------------------------------
カラーの切り替え
---------------------------------------------*/
G.swichColor = function(key)
{
    /*
    虹色系はグラデーションのCSSをbackground-imageに直接上書きする必要があるため
    CSSをかける際にはaddClssと併用。
    ちなみにここはアローキーを押した時にも切り替わるためのイベントです。
    */
    _DATA_.nowColorMode = key;
    var $target = $('.layer:first');
    $target.removeClass('up').removeClass('left').removeClass('down').removeClass('right');
    $target.addClass(key).css({'background-image':'url(' + image + ')' + G.colorModeCss[key]});
}

G.colorModeCss = {
        //ノーマル
        up:'',
        //レインボー
        left:',linear-gradient(limegreen,transparent),linear-gradient(90deg,skyblue,transparent),linear-gradient(-90deg,coral,transparent)',
        //カオス
        down:',linear-gradient(limegreen,transparent),linear-gradient(90deg,skyblue,transparent),linear-gradient(-90deg,coral,transparent)',
        //半透明
        right:''
};

G.swichColor = function(key)
{
    /*
    虹色系はグラデーションのCSSをbackground-imageに直接上書きする必要があるため
    CSSをかける際にはaddClssと併用。
    ちなみにここはアローキーを押した時にも切り替わるためのイベントです。
    */
    _DATA_.nowColorMode = key;
    var $target = $('.layer:first');
    $target.removeClass('up').removeClass('left').removeClass('down').removeClass('right');
    $target.addClass(key).css({'background-image':'url(' + image + ')' + G.colorModeCss[key]});
}

/*---------------------------------------------
ブラックアウト&フラッシュ
---------------------------------------------*/

G.fullScreenEffects = {
    space:function(key)
    {
        $effectsLayer.addClass('white');
        setTimeout(function(){
            $effectsLayer.removeClass('white');
        },100)
    },
    enter:function(key)
    {
        $effectsLayer.addClass('black');
        setTimeout(function(){
            $effectsLayer.removeClass('black');
        },150);
    }
};














    window.PLAYER = G;

})(window, jQuery);
