angular.module('zigChallenge', [])
	.controller('splitController', ['$http', function($http) {
		var list = this;
		var uri = 'http://challenge.hexiacloud.com/api/challenge1/';

		$http.get(uri + 'images.json').then(function(response) {
			list.images = response.data;
		});
		$http.get(uri + 'texts.json').then(function(response) {
			list.texts = response.data;
		});
		$http.get(uri + 'links.json').then(function(response) {
			list.links = response.data;
		});
	}])
	.directive('imageCard', function() {
		return {
			restrict: 'E',
			scope: {
				image: '=',
			},
			link: function() {

			},
			template: '<div class="card"><div>{{ image.name }}</div><img ng-src="{{ image.href }}" alt="{{ image.name }}" /></div>'
		}
	})
	.directive('textCard', function() {
		return {
			restrict: 'E',
			scope: {
				text: '='
			},
			link: function() {

			},
			template: '<div class="card">{{ text.body }}</div>'
		}
	})
	.directive('linkCard', function() {
		return {
			restrict: 'E',
			scope: {
				link: '='
			},
			link: function() {

			},
			template: '<div class="card"><div>{{ link.description }}</div><a ng-href="{{ link.href }}">{{ link.title }}</a></div>'
		}
	});