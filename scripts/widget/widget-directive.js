(function() {
  'use strict';

  angular.module("prowarenessApp")
    .controller("widgetController",["$scope","widgetService",function($scope,widgetService){

          widgetService.getWidgetData().then(function(response){
            $scope.widgetData = response.data;
            console.log($scope.widgetData);
          },function(error){

          });
    }])
    .directive("widget",function(){
      return {
        restrict:'E',
        transclude:true,
        controller:'widgetController',
        templateUrl: '../../views/widget-partials/widget.html'
      };
    });
})();
