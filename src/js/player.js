(function(window, $) {
    var G = {};
    var idx = '0';
    var $player = null;
    var $layer = null;
    var pass = 'gif/';
    var image = "";
    var keyArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

    G.init = function()
    {
        $player = $('.player');
    };

    G.makeImagePass =function(key)
    {
        
    };







/*=================================
effectsの設定
=================================*/

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

// G.changeColor = {
//     up:function(key)
//     {
//         //normalColor
//         var $target = $('.layer:first');

//         G.changeColor['removeClass']($target);

//         $target.addClass(key)
//         .css({'background-image':'url(' + image + ')'});
//     },
//     left:function(key)
//     {
//         //rainbow
//         var $target = $('.layer:first');

//         G.changeColor['removeClass']($target);

//         $target.addClass(key)
//         .css({'background-image':'url(' + image + '),linear-gradient(limegreen,transparent),linear-gradient(90deg,skyblue,transparent),linear-gradient(-90deg,coral,transparent)'});
//     },
//     down:function(key)
//     {
//         //chaos
//         var $target = $('.layer:first');

//         G.changeColor['removeClass']($target);

//         $target.addClass(key)
//         .css({'background-image':'url(' + image + '),linear-gradient(limegreen,transparent),linear-gradient(90deg,skyblue,transparent),linear-gradient(-90deg,coral,transparent)'});
//     },
//     right:function(key)
//     {
//         //????
//         log(key);
//     },
//     removeClass:function($dom)
//     {
//         $dom.removeClass('up').removeClass('left').removeClass('down').removeClass('right');
//     }

// };

G.swichColor = function(key)
{
    /*
    虹色系はグラデーションのCSSをbackground-imageに直接上書きする必要があるため
    CSSをかける際にはaddClssと併用。
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







    window.PLAYER = G;

})(window, jQuery);
