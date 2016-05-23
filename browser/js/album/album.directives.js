'use strict';

juke.directive('albumList', function() {
  return {    
    restrict: 'E',
    templateUrl: '/js/album/templates/albums.html',
    scope: {
      albums: '='
    }
  };

});