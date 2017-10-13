angular.module('app')
.controller('IndexCtrl',['$scope', '$http','$window',
	function($scope, $http, $window){
		$scope.search = function(){
			$http.get('http://localhost:3000/'+$scope.githubId)
			.then(function(res){
				$scope.followers = res.data
			})
		}


	}
])