(function() {
  'use strict';

  angular.module("prowarenessApp.widget")
    .directive("widgetRows",function(){
      return {
        restrict:'E',
        scope:{
          data:'=',
          deleteRow:'&deletefunc',
          pinRow:'&pinfunc',
          widgetType:'@widget'
        },
        transclude:true,
        controller:'widgetRowsController',
        templateUrl: '../../views/widget-partials/widget-rows-directive.html'
      };
    });
})();
