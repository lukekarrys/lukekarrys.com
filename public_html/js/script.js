/* Author:

*/
(function($) {

  var v = {
    'canyon': {position: 'top left'},
    'waterfall': {position: 'bottom left'},
    'jump': {position: 'top center'}
  };

$(function() {
  $(window).hashchange( function() {
    var k = location.hash.replace('#', '').toLowerCase();
    if (typeof v[k] !== undefined) {
      $('html').css({
        'background-image': 'url(../img/'+k+'.jpg)',
        'background-position': v[k].position
      });
    } 
  });
  
  $(window).hashchange();
});

})(jQuery);


