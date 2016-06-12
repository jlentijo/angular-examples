'use strict';

(function(angular) {

  function ModalService($document) {
    var modal = {};
    modal.config = {};

    modal.showModal = function(config, callback) {
      angular.extend(modal.config, config);
      modal.config.confirmCallback = callback;
      modal.element = $document.find('#' + modal.config.idModal + ' > div');
      modal.element.modal('show');
    };

    modal.closeModal = function(callback) {
      modal.element.modal('hide');
      modal.element.off('hidden.bs.modal');
      modal.element.on('hidden.bs.modal', function() {
        if (callback) callback();
      });
    };

    return modal;
  }

  angular.module('modalComponentApp').service('ModalService', [
    '$document',
    ModalService
  ]);

})(window.angular);