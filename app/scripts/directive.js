'use strict';

/**************************************
@name eCommApp.directive
***************************************/

function sparklinerevenue() {
    //console.log('1111111111111111111111111')
    return {
    restrict: 'A',
    link: function(scope, element) {
    console.log("Directive is called........")
     element.sparkline([5, 5, 7, 7, 9, 5, 3, 5, 2, 4, 6, 7], {
        type: 'line',
        width: '99.5%',
        height: '100',
        lineColor: '#5969ff',
        fillColor: '#dbdeff',
        lineWidth: 2,
        spotColor: undefined,
        minSpotColor: undefined,
        maxSpotColor: undefined,
        highlightSpotColor: undefined,
        highlightLineColor: undefined,
        resize: true
    });

    }
  }
};
function sparklinerevenue2() {
    //console.log('1111111111111111111111111')
    return {
    restrict: 'A',
    link: function(scope, element) {
    console.log("Directive is called........")
    element.sparkline([3, 7, 6, 4, 5, 4, 3, 5, 5, 2, 3, 1], {
        type: 'line',
        width: '99.5%',
        height: '100',
        lineColor: '#ff407b',
        fillColor: '#ffdbe6',
        lineWidth: 2,
        spotColor: undefined,
        minSpotColor: undefined,
        maxSpotColor: undefined,
        highlightSpotColor: undefined,
        highlightLineColor: undefined,
        resize: true
    });
    }
  }
};
function sparklinerevenue3() {
    //console.log('1111111111111111111111111')
    return {
    restrict: 'A',
    link: function(scope, element) {
    console.log("Directive is called........")
    element.sparkline([3, 7, 6, 4, 5, 4, 3, 5, 5, 2, 3, 1], {
        type: 'line',
        width: '99.5%',
        height: '100',
        lineColor: '#25d5f2',
        fillColor: '#dffaff',
        lineWidth: 2,
        spotColor: undefined,
        minSpotColor: undefined,
        maxSpotColor: undefined,
        highlightSpotColor: undefined,
        highlightLineColor: undefined,
        resize: true
    });
    }
  }
};
function sparklinerevenue4() {
    //console.log('1111111111111111111111111')
    return {
    restrict: 'A',
    link: function(scope, element) {
    console.log("Directive is called........")
    element.sparkline([3, 7, 6, 4, 5, 4, 3, 5, 5, 2, 3, 1], {
        type: 'line',
        width: '99.5%',
        height: '100',
        lineColor: '#fec957',
        fillColor: '#fff2d5',
        lineWidth: 2,
        spotColor: undefined,
        minSpotColor: undefined,
        maxSpotColor: undefined,
        highlightSpotColor: undefined,
        highlightLineColor: undefined,
        resize: true
    });
    }
  }
};
function modalHide(){
    //var clicked = false;
     return {
    restrict: 'A',
        link: function(scope, element,attr) {
          scope.dismiss = function() {
            console.log("element :::" , element);
            setTimeout(function(){
               element.modal('hide');
            },1000);
         };
        }
    }
}
// function myImgUpload (){
//     return {
//         // templateUrl: '/tpl.html',
//         require: ['^form'],
//         restrict: 'E',
//         replace: true,
//         scope: {
//             customModel: '=ngModel',
//             fieldName: '&name'
//         },
//         link: function(scope, elem, attr, controllers) {
//             scope.form = controllers[0];
//             scope.onFileSelected = function($files, $file, $newFiles, $duplicateFiles, $invalidFiles, $event) {
//                 console.log('onFileSelected');
//             }
//             scope.remove = function(){
//                 delete scope.customModel;
//             }
//         }
//     };
// }


angular
    .module('eCommApp')
    .directive('sparklineRevenue', sparklinerevenue)
    .directive('sparklineRevenue3', sparklinerevenue3)
    .directive('sparklineRevenue4', sparklinerevenue4)
    .directive('sparklineRevenue2', sparklinerevenue2)
    // .directive('myImgUpload', myImgUpload)
    .directive('modalHide', modalHide);
