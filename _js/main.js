require('waypoints/lib/noframework.waypoints');
require('waypoints/lib/shortcuts/inview');

var dom = require('ampersand-dom');
var footer = document.getElementById('footer');
var background = document.getElementById('background-blur');

new Waypoint.Inview({
    element: footer,
    enter: function () {
        dom.addClass(background, 'clear');
    },
    exited: function () {
        dom.removeClass(background, 'clear');
    }
});
