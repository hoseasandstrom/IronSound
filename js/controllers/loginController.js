
module.exports = function (app) {
    app.controller('LoginController', ['$scope', '$http', '$location', 'loginService', function ($scope, $http, $location, loginService) {
        $scope.name = '';
        $scope.password = '';

        $scope.login = function () {
            console.log(`${$scope.name} in as we speak`);

            // $http({
            //     url: '/login',
            //     method: 'post',
            //     data: {
            //         name: $scope.name,
            //         password: 'password123',
            //     },
            // }).then(function () {
            //     //$location.path('/library');
            // }).catch(function () {
            //     console.error('login failed');
            // });

            loginService.userLogin({
                    name: $scope.name,
                    password: 'password123',
                });
            $location.path('/library');
        };
    }]);
}
