var app = angular.module('app', [])

.controller('AppController', function ($scope, ServiceApi) {
	$scope.title = 'JSON Web Token';
	$scope.newData = '';

	$scope.getServerData = function() {
		ServiceApi.getData().then(function (datas) {
			$scope.datas = datas.data;
		});
	}
	
	$scope.getServerData();

	$scope.addData = function() {
		ServiceApi.postData($scope.newData).then(function (datas) {
			$scope.datas = datas.data;
			$scope.newData = '';
		});
	}

	$scope.deleteData = function() {
		ServiceApi.deleteData().then(function (datas) {
			$scope.datas = datas.data;
		});
	}
})

.factory('ServiceApi', ['$http', function($http) {

	var api = {};

	api.getData = function() {
		return $http.get('/datas');
	}
	api.postData = function(data) {
		return $http.post('/datas', { 'data' : {'info' : data}});
	}
	api.deleteData = function(data) {
		return $http.delete('/datas');
	}
	return api;
}])