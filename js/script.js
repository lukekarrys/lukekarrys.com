/*global window location jQuery */

(function($) {
  
  var v = {
    'canyon': {position: 'top left'},
    'waterfall': {position: 'bottom left'},
    'jump': {position: 'top center'}
  };

  $(function() {
    $(window).hashchange( function() {
      var k = location.hash.replace('#', '').toLowerCase(),
          src = 'jump',
          pos = v[src].position;
        
      if (typeof v[k] !== 'undefined') {
        src = k;
        pos = v[k].position;
      }
    
      $('#bg').css({
        'background-image': 'url(/lukekarrys.com/img/'+src+'.jpg)',
        'background-position': pos
      });
    });
  
    $(window).hashchange();

  });

})(jQuery);
