(function() {
  function MyService($location, $http) {
    return {
      homeRoute: homeRoute,
      aboutRoute: aboutRoute,
      contactRoute: contactRoute
    }

    function homeRoute() {
      $location.path('/');
    }


    function aboutRoute() {
      $location.path('/about');
    }

    function contactRoute() {
      $location.path('/contact');
    }


  }

  angular
    .module("app")
    .factory("MyService", MyService);
})();