(function() {
    'use strict';

    angular
        .module('myApp')
        .service('sharedService', sharedService);

    /*@ngInject*/
    function sharedService() {

        var sharedValue = "Value from shared service";

        return {
            getSharedValue       : getSharedValue,
            setSharedValue       : setSharedValue
        };

        function getSharedValue() {
            return sharedValue;
        }

        function setSharedValue(newValue) {
           sharedValue = newValue;
        }

    }
})();
