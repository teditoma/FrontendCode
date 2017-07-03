hrApp.controller('JobAddController', ['$scope', '$http', '$location', 'CommonResourcesFactory',
    function($scope, $http, $location, commonResourcesFactory) {
        $scope.job = {};
        $scope.requiredErrorMessage = "Please fill out this form!";

        /**
         * Reset form
         */
        $scope.reset = function () {
            this.job = {};
        };

        /**
         * Persist an employee
         * @param addEmployee - employee to be persisted
         */
        $scope.create = function (addJob) {
            console.log(addJob);
            $http({url: commonResourcesFactory.addJobUrl, method: 'PUT', data: addJob})
                .success(function (data) {
                    $scope.job = data;
                    console.log($scope.jobAddForm.$invalid);
                    $location.url('/JobView/' + $scope.job.jobId);
                });
        };
        //$scope.disabled = $scope.employeeAddForm.$valid;
    }]);