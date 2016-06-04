'use strict';

(function(angular) {

  var infoModal = {
    templateUrl: 'views/infomodal.template.html',
    controller: 'ModalController'
  };

  angular.module('modalComponentApp').component('infoModal', infoModal);

})(window.angular);