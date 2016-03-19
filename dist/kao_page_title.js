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
  }).provider("FormattedPageTitle", function() {
    var format = void 0;
    var isSetup = false;
    this.setFormat = function(templateFormat) {
      format = templateFormat;
      isSetup = true;
    };
    this.$get = function($interpolate, PageTitle) {
      var FormattedPageTitle = function() {};
      FormattedPageTitle.prototype.isSetup = function() {
        return isSetup;
      };
      FormattedPageTitle.prototype.format = function(scope) {
        return $interpolate(format)(scope);
      };
      FormattedPageTitle.prototype.set = function(scope) {
        return PageTitle.set(format, scope);
      };
      return new FormattedPageTitle();
    };
  });
  return {};
});
