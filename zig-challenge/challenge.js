angular.module('zigChallenge', [])
	.controller('challengeController', function() {
	})
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