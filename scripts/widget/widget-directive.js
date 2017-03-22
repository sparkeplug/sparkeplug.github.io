(function() {
  'use strict';

  angular.module("prowarenessApp.widget")
    .directive("widget",function(){
      return {
        restrict:'E',
        transclude:true,
        controller:'widgetController',
        templateUrl: '../../views/widget-partials/widget.html'
      };
    });
})();
