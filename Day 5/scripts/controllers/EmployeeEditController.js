hrApp.controller('EmployeeEditController', ['$scope', '$http', '$routeParams', '$location', 'CommonResourcesFactory', 'ManagerService',
    function ($scope, $http, $routeParams, $location, commonResourcesFactory, managerService) {
        $scope.requiredErrorMessage = "Please fill out this form!";
        $scope.patternDateNotRespectedMessage = "The date format should be yyyy-mm-dd";
        $scope.patternCommisionNotRespectedMessage = "Commission should be in the format 0.XX";

        //TODO #HR5
        $scope.departments = [];
        $scope.managers = [];
        $scope.jobs = [];
        $scope.employee = [];

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

        $http.get(commonResourcesFactory.findOneEmployeeUrl + $routeParams.employeeId)
            .success(function (data) {
                $scope.employee = data;
            });
        /**
         * Reset form
         */
        $scope.reset = function () {
            $scope.employee = {};
        };

        /**
         * Persist an employee
         * @param addEmployee - employee to be persisted
         */
        $scope.create = function (addEmployee) {
            $http({url: commonResourcesFactory.editEmployeeUrl, method: 'PUT', data: addEmployee})
                .success(function (data) {
                    $scope.employee = data;
                    $location.url('/employeeView/' + $scope.employee.employeeId);
                });
        };

        $scope.datePattern = /^\d{4}-\d{2}-\d{2}$/;
        $scope.commissionPattern =  /^[0]\.\d{1}(\d)?$/;

    }]);