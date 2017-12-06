angular.module('gettext').run(['gettextCatalog', function (gettextCatalog) {
/* jshint -W100 */
    gettextCatalog.setStrings('en_US', {"关于":"About","联系":"Contact","首页":"Home page"});
    gettextCatalog.setStrings('zh_CN', {"关于":"关于","联系":"联系","首页":"首页"});
/* jshint +W100 */
}]);