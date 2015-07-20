require('waypoints/lib/noframework.waypoints');
require('waypoints/lib/shortcuts/inview');

var each = function (nodes, fn) { Array.prototype.forEach.call(nodes, fn); };
var style = function (element, prop, value) { if (element) element.style[prop] = value; };

var dom = require('ampersand-dom');

// Dom elements
var modules = document.getElementById('modules');
var footer = document.getElementById('footer');
var blur = document.getElementById('background-blur');
var background = document.getElementById('background');
var contents = document.querySelectorAll('.inner-content');


var loadBg = function () { style(background, 'background-image', 'url(/img/bg.jpg)'); };
if (modules) {
    // When the top of #modules (the last section) starts to get scrolled
    // out of view, then load the non-blurred bg image
    new Waypoint.Inview({
        element: modules,
        exit: loadBg
    });
} else {
    // Otherwise load it right away
    loadBg();
}

if (footer) {
    // When the footer enters and exits the viewport,
    // fade out the burred background image
    new Waypoint.Inview({
        element: footer,
        enter: function () {
            dom.addClass(blur, 'clear');
        },
        exited: function () {
            dom.removeClass(blur, 'clear');
        }
    });
}

// // Parallax
if (window.requestAnimationFrame) {
    // This could be done with background-attachement: fixed but that causes
    // problems with backgrounds not painting when scrolled and the cover bg
    // images moving when scrolled up/down from the bottom. Since this is not
    // a required effect, do it in JS only with raf.
    var bgPosition = function () {
        each(contents, function (content, index) {
            style(content, 'background-position-y', document.body.scrollTop + 'px');
        });
    };
    require('dom-events').on(window, 'scroll', function () {
        window.requestAnimationFrame(bgPosition);
    });
}

// // For dynamic creation of backgrounds when testing
// var geopattern = require('geopattern');
// var colors = require('colors.css');
// each(contents, function (content) {
//     var color = colors[content.getAttribute('data-color')];
//     var pattern = geopattern.generate(content.id, {color: color});
//     content.style['background-image'] = pattern.toDataUrl();
// });
