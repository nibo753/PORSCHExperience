/*
 * https://github.com/miguel-perez/smoothState.js
 *
 * smoothState.load(url)
 * This loads the contents of a URL into our container.
 *
 * smoothState.fetch(url)
 * This fetches the contents of a URL and caches it.
 *
 * smoothState.clear(url)
 * This clears a given page from the cache. If no URL is provided it will clear the entire cache.
 *
 * smoothState.restartCSSAnimations()
 * This restarts any CSS animations applying to elements within the smoothState container.
 *
 */

import * as app from './app';


$(function() {
	var options = {
		prefetch: true,
		cacheLength: 5,
		hrefRegex: '/', //required for smooth scroll on #

		// on link click
		onBefore: function($container, $currentTarget){
			
		},

		// ANIMATION content exit
		onStart: {
			duration: 250,
			render: function ($container) {

			}
		},

		// Loading Indicator
		onProgress: {
			duration: 0,
			render: function($container){

			}
		},

		// ANIMATION content in
		onReady: {
			duration: 250,
			render: function ($container, $newContent) {


				// Inject the new content
				$container.html($newContent);
			}
		},

		// re-initialize JS files
		onAfter: function($container, $newContent){
			if ( $('.home').length) 	{ app.home(); 	}
			if ( $('.models').length) 	{ app.models(); }
		}
	},

	smoothState = $('#smoothState').smoothState(options).data('smoothState');
});
