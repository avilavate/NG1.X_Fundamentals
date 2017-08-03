(function () {
    'use strict';

    angular
        .module('myDirective', [])
        .directive('sampledirective', sampledirectiveFn);


    /** @ngInject */
    function sampledirectiveFn() {

        function directiveController($scope) {
            // var vm = this;
            // $scope.clickMe=function(){
            //     console.log("Printing from directive");
            // }
        }

        function link(scope, element, attr, ngCtrl) {
            console.log("called:");
            // $(element).css("background-color", "yellow")

            $(element).bind("scroll", (e) => {
                scope.$apply(() => {
                    scope.awesomeThings.push("avil");
                    console.log(scope.awesomeThings);
                });
            });

            console.log(scope.awesomeThings);
        }

        return {
            bindToController: true,
            controller: directiveController,
            controllerAs: 'Ctrl',
            link: link,
            restrict: 'AE'
            // template:"<button ng-click='clickMe()'>from directive</button>"
        }
    }

}());