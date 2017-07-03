hrApp.service('ManagerService', ['$http', 'CommonResourcesFactory', function ($http, CommonResourcesFactory) {
        return {
            findManagers: function () {
                return $http.get(CommonResourcesFactory.findAllEmployeesUrl)
                    .success(function (data) {
                        var managers = [];
                        for ( var i in data)
                            if (data[i].managerId != null )
                                for ( var j in data)
                                    if( data[i].managerId == data[j].id) {
                                        for (var p in managers)
                                            if (managers[p].id == data[j].id)
                                                exists = 1;
                                        if (exists == 0)
                                            managers.push(data[j].managerId);
                                   }

                        return managers;
                    })
                    .error(function (err) {
                        return {
                            "id": 100,
                            "firstName": "Steven",
                            "lastName": "King",
                            "email": "SKING",
                            "phoneNumber": "515.123.4567",
                            "hireDate": "1987-06-17",
                            "jobId": 1,
                            "salary": 24000.00,
                            "commissionPct": null,
                            "managerId": null,
                            "departmentId": 90
                        };
                    });
            }
        }
    }]
);