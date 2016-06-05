'use strict';

(function(angular) {

  function ModalUiController(ModalService) {
    var vm = this;
    vm.$routerOnActivate = function () {
      vm.modalAppController.navbar.modals.active = true;  
      vm.modalAppController.navbar.messages.active = false;
    };
    vm.infoModal = function() {
      ModalService.showModal({
        idModal: 'infoModal',
        header: 'Info modal',
        body: 'Body info modal...'
      });
    };
    vm.confirmModal = function() {
      ModalService.showModal({
        idModal: 'confirmModal',
        header: 'Confirm modal',
        body: 'Body confirm modal...'
      }, function() {
        ModalService.showModal({
          idModal: 'infoModal',
          header: 'Info modal',
          body: 'Callback from confirm modal...'
        });
      });
    };
  }

  angular.module('modalComponentApp').controller('ModalUiController', [
    'ModalService',
    ModalUiController
  ]);

})(window.angular);