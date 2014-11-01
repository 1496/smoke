(function(window, $) {
    var G = {};
    var $player = null;
    var pass = 'gif/';
    var folder = '0';

    G.init = function()
    {
    	$player = $('#player');
    };

    G.changeImage =function(type)
    {
    	$player.css({'background-image':'url('+pass + folder + '/' + type + '.gif' + ')'});

    	// G.effect_repeat_to_long();
    };

    G.effect_repeat_to_long = function()
    {
    	$player.css({'background-repeat':'repeat'});
    	$player.css({'background-size':'100% 100%'});
    	setTimeout(function(){
    		$player.css({'background-size':'0% 0%'});
    	},400);
    	
    }

    window.PLAYER = G;

})(window, jQuery);
