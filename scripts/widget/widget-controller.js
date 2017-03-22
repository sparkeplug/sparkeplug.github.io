(function() {
  'use strict';

  angular.module("prowarenessApp.widget")
    .controller("widgetController",["$scope","widgetService","$window",function($scope,widgetService,$window){

          function uniqueId() {
              return 'id-' + Math.random().toString(36).substr(2, 16);
          };

          function widgetCheck(array,data){
            array.forEach(function(item, index, object){
              if(item.id === data.id){
                object.splice(index, 1);
                return true;
              }
            });
          }

          $scope.widgetDate = function(date){
            return new Date(date)
          };
          $scope.pinnedItems = [];
          widgetService.getWidgetData().then(function(response){
            $scope.widgetData = response.data;
            $scope.widgetData.forEach(function(item,index,object) {
              item.id = uniqueId();
            })
          },function(error){
            console.error(error);
          });



          $scope.delete = function($event,rowScope,flag){
              var data = rowScope.data;
              ($event !== null) ? $event.stopPropagation():null;
              if(flag === 'widgetData'){
                widgetCheck($scope.widgetData,data);
              }else{
                  widgetCheck($scope.pinnedItems,data);
              }
          };

          $scope.pin = function($event,rowScope,flag){
              var data = rowScope.data;
              $event.stopPropagation();
              if(flag === 'widgetData'){
                $scope.pinnedItems.push(data);
                $scope.delete(null,rowScope,'widgetData');
              }else{
                $scope.widgetData.push(data);
                $scope.delete(null,rowScope,'pinnedItems');
              }
          };

          $scope.reload = function() {
              $window.location.reload();
          };
    }]);
})();
