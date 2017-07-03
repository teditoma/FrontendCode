hrApp.controller('MenuController', ['$scope', 'EmployeeActionsService', 'JobActionsServices', function ($scope, EmployeeActionsService, JobActionsServices) {
    /*
    $scope.employeeActionList = [{
        url:'#/employeeslist',
        label:'Employee List'
    }];
    */

    $scope.employeeActionList = EmployeeActionsService;
    $scope.jobActionList = JobActionsServices;
    $scope.currentDate = new Date();
}]);
