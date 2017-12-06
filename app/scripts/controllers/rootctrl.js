'use strict';

/**
 * @ngdoc function
 * @name yeomanApp.controller:RootCtrl
 * @description
 * # RootCtrl
 * Controller of the yeomanApp
 */
angular.module('yeomanApp')
  .controller('RootCtrl', ['$scope', 'gettextCatalog', function ($scope, gettextCatalog) {
    $scope.changeLanguage = function (){
      var lang = gettextCatalog.getCurrentLanguage();
      if(lang === 'en_US') {
        gettextCatalog.setCurrentLanguage('zh_CN');
      }else {
        gettextCatalog.setCurrentLanguage('en_US');
      }
    }
    
  }]);
