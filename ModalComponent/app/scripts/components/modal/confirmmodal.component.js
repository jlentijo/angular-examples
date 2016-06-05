'use strict';

(function(angular) {

  var confirmModal = {
    templateUrl: 'scripts/components/modal/confirmmodal.template.html',
    controller: 'ModalController'
  };

  angular.module('modalComponentApp').component('confirmModal', confirmModal);

})(window.angular);