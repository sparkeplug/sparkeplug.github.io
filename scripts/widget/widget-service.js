(function() {
  'use strict';

  angular.module("prowarenessApp")
    .directive("widget",function(){
      return {
        restrict:'E',
        controller:'widgetController',
        scope: {
          data:'='
        },
        templateUrl: '../../views/widget-partials/widget.html'
      };
    });
}());
