(function() {
  'use strict';

  angular.module("prowarenessApp")
    .service("widgetService",['$http',function($http){

      this.url = config.restApi['widget-data']['url'];
      this.method = config.restApi['widget-data']['method'];
      var data = {"url":this.url,"method":this.method};

      this.getWidgetData = function(){
        return $http(data);
      };
    }]);
})();
