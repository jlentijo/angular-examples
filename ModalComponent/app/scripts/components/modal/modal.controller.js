'use strict';

(function(angular) {

  function ModalController(ModalService) {
    var vm = this;
    vm.config = ModalService.config;
    vm.confirmAction = function() {
      ModalService.closeModal();
      vm.config.callback();
    };
  }

  angular.module('modalComponentApp').controller('ModalController', [
    'ModalService',
    ModalController
  ]);

})(window.angular);