$traceurRuntime.ModuleStore.getAnonymousModule(function() {
  "use strict";
  angular.module("kao.page-title", []).service("PageTitle", function($window, $interpolate) {
    var getTitle = function(template, scope) {
      var title = template;
      if (typeof scope !== "undefined" && scope !== null) {
        title = $interpolate(template)(scope);
      }
      return title;
    };
    this.set = function(template, scope) {
      var title = getTitle(template, scope);
      $window.document.title = title;
    };
  });
  return {};
});
