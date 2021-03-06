/*
 * Web Widget Pattern
 * Based on http://alexmarandon.com/articles/web_widget_jquery/
 */
 var OmniNav = require('./OmniNav.js');


(function() {

// Localize jQuery variable
var jQuery;
var jqSource = 'https://code.jquery.com/jquery-2.2.4.min.js';
var jqHash = 'sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44=';

/******** Load jQuery if not present *********/
if (window.jQuery === undefined || window.jQuery.fn.jquery !== '1.4.2') {
    var script_tag = document.createElement('script');
    script_tag.setAttribute("src", jqSource);
    script_tag.setAttribute("integrity", jqHash);
    script_tag.setAttribute("crossorigin", "anonymous");

    if (script_tag.readyState) {
      script_tag.onreadystatechange = function () { // For old versions of IE
          if (this.readyState == 'complete' || this.readyState == 'loaded') {
              scriptLoadHandler();
          }
      };
    } else { // Other browsers
      script_tag.onload = scriptLoadHandler;
    }
    // Try to find the head, otherwise default to the documentElement
    (document.getElementsByTagName("head")[0] || document.documentElement).appendChild(script_tag);
} else {
    // The jQuery version on the window is the one we want to use
    jQuery = window.jQuery;
    main();
}

/******** Called once jQuery has loaded ******/
function scriptLoadHandler() {
    // Restore $ and window.jQuery to their previous values and store the
    // new jQuery in our local jQuery variable
    jQuery = window.jQuery.noConflict(true);
    // Call our main function
    main();
}

/******** Our main function ********/
function main() {
    jQuery(document).ready(function($) {
      var $omniNavContainter = $('nav#omni-nav');
      var target = $omniNavContainter.data('target');
      var $omniNav = OmniNav.build($, target);
      $('nav#omni-nav').replaceWith($omniNav);
    });
}

})(); // We call our anonymous function immediately
