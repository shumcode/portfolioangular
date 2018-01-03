(function () {
  function MainController(MyService, $http) {
    var vm = this;
    vm.success = false;
    vm.error = false;
    vm.sendMail = function () {

      data = ({
        name : vm.name,
        email: vm.email,
        message: vm.message
      });

    $http.post('/contact-form', {msg: 'Hellow word!'}).
      success(function(data, status, headers, config) {
        console.log("it worked");
      }).
      error(function(data, status, headers, config) {
        console.log("it didn't work");
      });
    }
    vm.homeRoute = function () {
      MyService.homeRoute();
    }
    vm.aboutRoute = function () {
      MyService.aboutRoute();
    }
    vm.contactRoute = function () {
      MyService.contactRoute();
    }
  }

  angular
    .module("app")
    .controller("MainController", MainController);
})();
