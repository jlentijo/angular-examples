'use strict';

(function(angular) {

  var modalUi = {
    templateUrl: 'scripts/ui-modals/modalui.template.html',
    controller: 'ModalUiController',
    controllerAs: 'modalUi',
    require: {
      modalAppController: '^modalApp'
    }
  };
  
  angular.module('modalComponentApp').component('modalUi', modalUi);

})(window.angular);