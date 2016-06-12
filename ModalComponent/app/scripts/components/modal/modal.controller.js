'use strict';

(function(angular) {

  function ModalController(ModalService) {
    var vm = this;
    vm.config = ModalService.config;
    vm.confirmAction = function() {
      ModalService.closeModal(function () {
        vm.config.confirmCallback();
      });
    };
    vm.closeModal = function () {
      ModalService.closeModal();
    };
  }

  angular.module('modalComponentApp').controller('ModalController', [
    'ModalService',
    ModalController
  ]);

})(window.angular);