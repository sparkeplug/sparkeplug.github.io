(function() {
  'use strict';

  angular.module("prowarenessApp")
    .controller("widgetController",["$scope","widgetService",function($scope,widgetService){
          $scope.pinnedItems = 0;
          widgetService.getWidgetData().then(function(response){
            $scope.widgetData = response.data;
            console.log($scope.widgetData);
          },function(error){

          });

          $scope.delete = function(data){
            $scope.widgetData.forEach(function(item, index, object){
              if(item.name === data.name){
                object.splice(index, 1);
                exit();
              }
            });
          };

          $scope.pin = function(data){
              $scope.pinnedItems+=1;
              data.data.pinNumber = $scope.pinnedItems;
              console.log(data.data);
          };
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
