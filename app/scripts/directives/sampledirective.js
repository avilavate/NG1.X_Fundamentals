(function () {
    'use strict';

    angular
        .module ('myDirective',[])
        .directive ('sampledirective', sampledirectiveFn);


    /** @ngInject */
    function sampledirectiveFn() {

        function directiveController($scope){
            var vm = this;
            $scope.clickMe=function(){
                console.log("Printing from directive");
            }
          
        }

        function link(scope, element, attr){
         $(element).css("background-color", "yellow")
        }

        return {
            bindToController: true,
            controller: directiveController,
            controllerAs: 'Ctrl',
            link: link,
            restrict: 'AE',
            scope: {},
            template:"<button ng-click='clickMe()'>from directive</button>"
        }
    }

} ());