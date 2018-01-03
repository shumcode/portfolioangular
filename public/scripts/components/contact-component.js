(function () {
  var contactComponent = {
    templateUrl: "partials/contact.html",
    controller: "MainController"
  }


  angular
    .module("app")
    .component("contactComponent", contactComponent); 
})();