hrApp.controller('JobViewController', ['$scope', '$http', '$routeParams', '$location', 'JobService',
    function ($scope, $http, $routeParams, $location, JobService) {

        // Handle a promise
        JobService.findById($routeParams.jobId)
            .then(function (res) {
                $scope.job = res.data;
            }, function (err) {
                console.log("Error at job/findOne: " + err);
                console.log($routeParams.jobId);
            });

        $scope.back = function () {
            $location.url('/jobList');
        }
    }]);