(function () {

  angular
    .module("app")
    .config(function($routeProvider){
      $routeProvider
      .when("/", {
        template: "<home-component></home-component>"
      })
      .when("/about", {
        template: "<about-component></about-component>"
      })
      .when("/contact", {
        template: "<contact-component></contact-component>"
      });
    });
})();