/**
 * Created by ginel.guiu on 6/29/2017.
 */

hrApp.controller('UserController',['$scope', '$location', function($scope,$location){
    $scope.user={};

    $scope.users=[];



    $scope.saveUser=function() {
        $scope.users.push(angular.copy($scope.user));
        alert('Userul a fost salvat');
    }
    $scope.back=function(){
        $location.url('/');
    }
}]);