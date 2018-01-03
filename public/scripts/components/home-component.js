(function() {
  var homeComponent = {
    templateUrl: "partials/home.html",
    controller: "MainController"
  }

  angular
    .module("app")
    .component("homeComponent", homeComponent)
})();