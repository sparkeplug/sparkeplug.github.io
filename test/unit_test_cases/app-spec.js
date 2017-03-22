'use strict';

describe("Prowareness Widget App Unit Testing -> ", function() {

  beforeEach(function(){
    module("prowarenessApp");
    module("prowarenessApp.widget");
  });

  describe("global config object test ->",function(){
    it("whether widget data rest url is set", function() {
      expect(config.restApi['widget-data']['url']).toBe("http://challenge.hexiacloud.com/api/challenge1/list.json");
    });
  });

});
