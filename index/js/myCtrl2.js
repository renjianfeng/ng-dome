/**
 * Created by dell4 on 2016/3/18.
 */

var myApp1=angular.module("myApp1",[]);

//指令
myApp1.directive("hello",function(){
    return{
        scope:{},
        restrict : 'AE',
        template : '<div><input type="text" ng-model="username" />{{username}}</span></div>',
        transclude : true
    }
})