hrApp.controller('JobEditController', ['$scope', '$http', '$routeParams', '$location', 'CommonResourcesFactory', 'JobService',
    function ($scope, $http, $routeParams, $location, commonResourcesFactory, JobService) {
        $scope.requiredErrorMessage = "Please fill out this form!";

        //TODO #HR5
        $scope.job = {};

        JobService.findById($routeParams.jobId)
            .then(function (res) {
                $scope.job = res.data;

            }, function (err) {
                console.log("Error at job/findOne: " + err);
            })


        /**
         * Reset form
         */
        $scope.reset = function () {
            $scope.job = {};
        };

        /**
         * Persist an employee
         * @param addEmployee - employee to be persisted
         */
        $scope.create = function (addJob) {
            $http({url: commonResourcesFactory.editJobUrl, method: 'PUT', data: addJob})
                .success(function (data) {
                    $scope.job = data;
                    $location.url('/jobView/' + $scope.job.jobId);
                });
        };

    }]);