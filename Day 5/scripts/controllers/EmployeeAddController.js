hrApp.controller('EmployeeAddController', ['$scope', '$http', '$location', 'CommonResourcesFactory', 'ManagerService',
    function($scope, $http, $location, commonResourcesFactory, managerService) {
        $scope.employee = {};
        $scope.requiredErrorMessage = "Please fill out this form!";
        $scope.patternDateNotRespectedMessage = "The date format should be yyyy-mm-dd";
        $scope.patternCommisionNotRespectedMessage = "Commission should be in the format 0.XX";

        $scope.departments = [];
        $scope.jobs = [];

        //TODO #HR1
        $http.get(commonResourcesFactory.findAllDepartmentsUrl)
            .success(function (data) {
                $scope.departments = data;

            });
        $http.get(commonResourcesFactory.findAllJobsUrl)
            .success(function (data) {
                $scope.jobs = data;
            });


        managerService.findManagers()
            .then(function (res) {
                $scope.managers = res.data;

            }, function (err) {
            console.log("Error at employees/findOne: " + err);
        })


        /**
         * Reset form
         */
        $scope.reset = function () {
            this.employee = {};
        };

        /**
         * Persist an employee
         * @param addEmployee - employee to be persisted
         */
        $scope.create = function (addEmployee) {
            console.log(addEmployee);
            $http({url: commonResourcesFactory.addEmployeeUrl, method: 'POST', data: addEmployee})
                .success(function (data) {
                    $scope.employee = data;
                    $location.url('/employeeView/' + $scope.employee.employeeId);
                });
        };
        //$scope.disabled = $scope.employeeAddForm.$valid;
        $scope.datePattern = /^\d{4}-\d{2}-\d{2}$/;
        $scope.commissionPattern = /^[0]\.\d{1}(\d)?$/;
}]);