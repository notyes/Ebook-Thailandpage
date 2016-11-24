
var app = angular.module('thailandpages-book' ,[]);

var friends = [
  {name:'John', age:25, gender:'boy'},
  {name:'Jessie', age:30, gender:'girl'},
  {name:'Johanna', age:28, gender:'girl'},
  {name:'Joy', age:15, gender:'girl'},
  {name:'Mary', age:28, gender:'girl'},
  {name:'Peter', age:95, gender:'boy'},
  {name:'Sebastian', age:50, gender:'boy'},
  {name:'Erika', age:27, gender:'girl'},
  {name:'Patrick', age:40, gender:'boy'},
  {name:'Samantha', age:60, gender:'girl'}
]

app.controller("MainCtrl", ['$scope', '$rootScope', 'setMenuName', 'subCategory', '$location', 'browser', function ($scope, $rootScope, setMenuName, subCategory, $location , browser) {
	$scope.$location = $location;
	$scope.menu = menus;
  $scope.browser = browser();
	$scope.menu_name = setMenuName.getText();
	$scope.listSubCategory = subCategory.getSub();
	$scope.set = function(msg, sub){
		$scope.menu_name = setMenuName.setText(msg);
		$scope.listSubCategory = subCategory.setSub(sub);
	}


}]);

app.factory('setMenuName', function() {
    return {
        name: menus[0].name,
        setText: function (msg) {
            return this.name = msg;
        },
        getText: function () {
            return this.name;
        }
    };
});

app.factory('subCategory', function() {
    return {
        name: menus[0].subCategory,
        setSub: function (sub) {
            return this.name = sub;
        },
        getSub: function () {
            return this.name;
        }
    };
});

app.service('browser', ['$window', function($window) {

     return function() {

        var userAgent = $window.navigator.userAgent;

        var browsers = {chrome: /chrome/i, safari: /safari/i, firefox: /firefox/i, ie: /internet explorer/i};

        for(var key in browsers) {
            if (browsers[key].test(userAgent)) {
                return key;
            }
       };

       return 'unknown';
    }

}]);

app.directive('myTarget', ['$window', 'browser', function($window , browser) {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
          var href = element.href;
          console.log( browser() );
          if(browser() == 'chrome' || browser() == 'ie') {  // replace with your condition
            // element.attr("target", "_blank");
          }
        }
    };
}]);


jQuery(document).ready(function($) {
  
  a = window.location.hash;
  a = a.substring( 2 , 999999999999 );
  $('span[data-name="'+decodeURIComponent(a)+'"]').click();

});



