(function() {
  var aboutComponent = {
    templateUrl: "partials/about.html",
    controller: "MainController"
  }

  angular
    .module("app")
    .component("aboutComponent", aboutComponent);
})();