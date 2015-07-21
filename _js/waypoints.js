/* global Waypoint */

// Load waypoints into the bundle which assigns itself to a global
require('waypoints/lib/noframework.waypoints')
require('waypoints/lib/shortcuts/inview')

const waypointFactory = (opts) => new Waypoint.Inview(opts)

export default waypointFactory
