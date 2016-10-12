'use strict';

(function () {
    function AnalyserService() {
        var data = {
            language: null,
            sentiment: null,
            offensiveness: 0,
            verbs: 0,
            adjectives: 0,
            nouns: 0
        };

        function analyse(text) {
            // TODO
            console.log('Analysing text: %s', text);
        }

        return {
            analyse: analyse,
            value: data
        }
    }

    angular.module('myApp').factory('AnalyserService', AnalyserService);
})();