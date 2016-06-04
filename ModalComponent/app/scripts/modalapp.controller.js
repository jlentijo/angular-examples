'use strict';

(function(angular) {

  function ModalAppController(ModalService) {
    var vm = this;
    vm.save = function() {
      ModalService.showModal({
        idModal: 'userInfoModal',
        header: 'Info modal',
        body: 'User saved...'
      });
    };
    vm.remove = function() {
      ModalService.showModal({
        idModal: 'userConfirmModal',
        header: 'Confirm modal',
        body: 'Do you want remove it?'
      }, function() {
        ModalService.showModal({
          idModal: 'userInfoModal',
          header: 'Info modal',
          body: 'User removed...'
        });
      });
    };
  }

  angular.module('modalComponentApp').controller('ModalAppController', [
    'ModalService',
    ModalAppController
  ]);

})(window.angular);