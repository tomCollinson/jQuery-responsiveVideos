(function ($) {

    "use strict";

    $.responsiveVideos = function (element, options) {

        var defaults = {
              sources: [
	            'youtube',
	            'vine'
		        ],
		        parentEl: 'body',
		        wrapperClass : 'responsive-vid'
            };

        var plugin = this;

        plugin.settings = {};

        plugin.init = function () {
            plugin.settings = $.extend({}, defaults, options);

            setupVids();

        };

        // Find the Greatest Common Denominator
	    var gcd = function (a, b) {
	        var m, temp;

	        if (b > a) {
	            temp = a;
	            a = b;
	            b = temp;
	        }

	        while (b !== 0) {
	            m = a % b;
	            a = b;
	            b = m;
	        }

	        return a;
	    };

	    var ratioPaddingSize = function (x, y) {
	        var c = gcd(x, y);
	        return ((y / c) / (x / c)) * 100;
	    };

	    var setupVids = function () {

	        // Check settings to see if there's a selector provided in which the search should be limited
	        // otherwise apply the changes to all matches

	        var selector = plugin.settings.parentEl + " object, " + plugin.settings.parentEl + " iframe",
	            sources = "";


	        for (var i = 0; i < plugin.settings.sources.length; i += 1) {

	            sources = sources + "src.indexOf(" + plugin.settings.sources[i] + ") > -1 || ";

	        }

	        $(selector).each(function () {
	            var src = $(this).attr('src'),
	                ratioPadding;

	            if (src === undefined) {
	                src = $(this).attr('data');
	            }

	            if (src !== undefined) {

	                // Check for Vine, YouTube or BrightCove otherwise don't affect the iFrame
	                if (sources) {

	                    ratioPadding = ratioPaddingSize($(this).width(), $(this).height());

	                    $(this).wrap('<div class="' + plugin.settings.wrapperClass + '"></div>').parent().css({
	                        'padding-top': ratioPadding + '%',
	                        'position': 'relative'
	                    });

	                    $(this).css({
	                        'width': '100%',
	                        'height': '100%',
	                        'position': 'absolute',
	                        'top': '0',
	                        'left': '0'
	                    });
	                }
	            }
	        });

	    };

        plugin.init();

    };

    $.fn.responsiveVideos = function (options) {

        return this.each(function () {
            if (undefined === $(this).data('responsiveVideos')) {
                var plugin = new $.responsiveVideos(this, options);
                $(this).data('responsiveVideos', plugin);
            }
        });

    };

})(jQuery);