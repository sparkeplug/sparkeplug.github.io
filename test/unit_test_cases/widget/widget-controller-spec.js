'use strict';

describe("Prowareness Widget App Unit Testing -> ", function() {

  var $scope, $rootScope, element, $controller, $compile, compiledElement, $httpBackend ;

  var widget_mock_data = [
  {"type": "image", "name": "Purry", "href": "http://placekitten.com/150/300", "timestamp":"2016-12-02 7:30:00" },
  {"type": "image", "name": "Whiskers", "href": "http://placekitten.com/400/200", "timestamp":"2016-12-02 8:30:00" },
  {"type": "text", "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lobortis vel ex quis luctus. Fusce lobortis est libero, eget pharetra mi bibendum a. Maecenas a facilisis dolor. Donec bibendum sit amet quam nec pellentesque. Maecenas aliquet risus nec neque ultrices molestie. Duis imperdiet ornare porttitor. Praesent varius lorem ac urna tempor, at convallis nibh fermentum. Phasellus luctus ut purus et congue. Vestibulum congue volutpat leo, et molestie erat. Aenean a augue euismod, scelerisque lacus sed, egestas elit. Nunc eget facilisis odio. Curabitur semper congue metus, et interdum turpis posuere at. Mauris congue tempus iaculis. Ut at imperdiet sem. ", "timestamp":"2016-12-02 10:30:00"},
  {"type": "link", "title": "Step 0", "href": "https://docs.angularjs.org/tutorial/step_00", "description": "First step of the tutorial.", "timestamp":"2016-12-02 8:00:00"},
  {"type": "text", "body": "Aliquam vel lectus interdum, vulputate nibh eget, vulputate lorem. Proin maximus ligula vitae lacus accumsan, id iaculis ligula placerat. Aenean semper ut nibh id elementum. Vivamus id posuere ante. Aliquam cursus ligula sed enim suscipit, gravida faucibus sem pulvinar. Aliquam erat volutpat. Praesent faucibus porta ipsum, et cursus sem volutpat cursus. Nunc consequat neque rhoncus arcu sollicitudin tincidunt. Sed sodales eros sed dolor fermentum auctor.", "timestamp":"2016-12-02 8:30:00"},
  {"type": "link", "title": "Step 1", "href": "https://docs.angularjs.org/tutorial/step_01", "description": "Second step of the tutorial.", "timestamp":"2015-12-02 8:30:00" },
  {"type": "text", "body": "Sed congue placerat mi sed posuere. In hac habitasse platea dictumst. Proin consequat nec purus id rhoncus. Sed non ipsum mauris. Quisque vehicula luctus fringilla. Nam nec diam non ex iaculis accumsan pellentesque non nisi. Sed eu risus eu ante tincidunt pulvinar sit amet non eros. In maximus at mauris condimentum interdum. Donec vitae tellus ac turpis lacinia tincidunt at ut purus. ", "timestamp":"2016-12-04 8:30:00"},
  {"type": "image", "name": "Fluffy", "href": "http://placekitten.com/400/350", "timestamp":"2016-11-02 8:30:00" },
  {"type": "link", "title": "Step 2", "href": "https://docs.angularjs.org/tutorial/step_02", "description": "Third step of the tutorial.", "timestamp":"2016-11-03 8:00:00" }
];

  beforeEach(function(){
    module("prowarenessApp");
    module("prowarenessApp.widget");
  });

  describe("widget controller test ->",function(){

    beforeEach(inject(function(_$rootScope_,_$compile_,_$controller_,_$httpBackend_){
      $rootScope = _$rootScope_;
      $compile = _$compile_;
      $controller = _$controller_;
      $httpBackend = _$httpBackend_;
      $scope = $rootScope.$new();
      $httpBackend.when('GET','http://challenge.hexiacloud.com/api/challenge1/list.json')
        .respond(200,widget_mock_data,{},'OK');
      element = angular.element("<widget></widget>");
      compiledElement = $compile(element)($scope);
      $controller("widgetController",{
        $scope:$scope
      });
      $scope.$digest();
      $httpBackend.flush();
    }));

    afterEach(function(){
      $httpBackend.verifyNoOutstandingExpectation();
      $httpBackend.verifyNoOutstandingRequest();
    });

    it("verify whether the widgetData scope variable is populated with JSON data", function() {
        expect($scope.widgetData).toBeDefined();
    });
  });

});
