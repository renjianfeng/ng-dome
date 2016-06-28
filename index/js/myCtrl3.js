/**
 * Created by dell4 on 2016/3/18.
 */

var myApp1=angular.module("myApp1",[]);
myApp1.controller("testController3",function($scope){
  $scope.userName="你好，优百";
})
//指令
myApp1.directive("hd",function(){
    return{
        scope:{
            uname:'@'
        },
        restrict : 'AE',
        template : '<div ng-bind="uname"></div>',
        replace : true,
        //link:function(scope,element,attrs){
        //    scope.uname=attrs.uname;
        //}
    }
})