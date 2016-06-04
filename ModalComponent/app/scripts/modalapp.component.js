'use strict';

(function(angular) {

  var modalApp = {
    templateUrl: 'views/modalapp.template.html',
    controller: 'ModalAppController',
    controllerAs: 'modalApp'
  };
  
  angular.module('modalComponentApp').component('modalApp', modalApp);

})(window.angular);