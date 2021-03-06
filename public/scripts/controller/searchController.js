'use strict';

(function(module) {
  const searchController = {};

  searchController.render = function() {
    $('#about', '#home').hide();
    $('#form').fadeIn();
    google.maps.event.trigger(map, 'resize');
    $('#formInput').hide();
  }

  module.searchController = searchController;
})(window);