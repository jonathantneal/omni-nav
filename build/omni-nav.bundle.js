/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
 * Web Widget Pattern
 * Based on http://alexmarandon.com/articles/web_widget_jquery/
 */
var OmniNav = __webpack_require__(1);

(function () {

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
            script_tag.onreadystatechange = function () {
                // For old versions of IE
                if (this.readyState == 'complete' || this.readyState == 'loaded') {
                    scriptLoadHandler();
                }
            };
        } else {
            // Other browsers
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
        jQuery(document).ready(function ($) {
            var $omniNavContainter = $('nav#omni-nav');
            var target = $omniNavContainter.data('target');
            var $omniNav = OmniNav.build($, target);
            $('nav#omni-nav').replaceWith($omniNav);
        });
    }
})(); // We call our anonymous function immediately

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
 * OmniNav Module
 */
var OmniNav = function () {
  // Constants
  var HOME_PAGE_URL = 'https://www.chapman.edu/';
  var LOGO_URL = 'https://www.chapman.edu/_assets/chapman_logo_horizontal_color-899d76a351f8eb188ab8100081a3640f5c4bb1ed26e0999f72922d290f9cae5e.png';

  // Globals
  var $;

  // Public Methods
  var build = function build(jqLocalized, target) {
    init(jqLocalized);
    target = target ? target : 'default';

    var $omniNav = buildNav(target);
    return $omniNav;
  };

  // Private Methods
  var init = function init(jqLocalized) {
    $ = jqLocalized;
  };

  var buildNav = function buildNav(target) {
    console.log("Building OmniNav for target: " + target);
    var $omniNav = $('<nav id="omni-nav" class="post-build" />');
    var $logo = buildLogoLink();
    $omniNav.append($logo);
    return $omniNav;
  };

  var buildLogoLink = function buildLogoLink() {
    var $a = $('<a />').attr('id', 'omni-nav-logo').attr('href', HOME_PAGE_URL).attr('title', 'Chapman University Website Home Page');
    var $img = $('<img />').attr('src', LOGO_URL);
    $a.append($img);
    return $a;
  };

  // Public API
  return {
    build: build
  };
}();

module.exports = OmniNav;

/***/ })
/******/ ]);