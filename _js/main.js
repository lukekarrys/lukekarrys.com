require('waypoints/lib/noframework.waypoints');
require('waypoints/lib/shortcuts/inview');

var dom = require('ampersand-dom');
var modules = document.getElementById('modules');
var footer = document.getElementById('footer');
var blur = document.getElementById('background-blur');
var background = document.getElementById('background');

// When the top of #modules (the last section) starts to get scrolled
// out of view, then load the non-blurred bg image
new Waypoint.Inview({
    element: modules,
    exit: function () {
        background.style['background-image'] = 'url(/img/bg.jpg)';
    }
});

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

// var geopattern = require('geopattern');
// var colors = require('colors.css');
// [].forEach.call(document.querySelectorAll('.inner-content'), function (content) {
//     var color = colors[content.getAttribute('data-color')];
//     var pattern = geopattern.generate(content.id, {color: color});
//     content.style['background-image'] = pattern.toDataUrl();
// });
