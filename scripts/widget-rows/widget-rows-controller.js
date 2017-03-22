(function() {
  'use strict';

  angular.module("prowarenessApp.widget")
    .controller("widgetRowsController",["$scope","widgetService","$window",function($scope,widgetService,$window){

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

    }]);
})();
