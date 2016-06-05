'use strict';

(function(angular) {

  var infoModal = {
    templateUrl: 'scripts/components/modal/infomodal.template.html',
    controller: 'ModalController'
  };

  angular.module('modalComponentApp').component('infoModal', infoModal);

})(window.angular);