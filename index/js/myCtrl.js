/**
 * Created by dell4 on 2016/3/18.
 */

var myApp1=angular.module("myApp1",[]);

//注射器加载完所有模块式，此方法执行一次；
myApp1.run(function($templateCache){
    $templateCache.put(
        "<div>hi angular<div ng-transclude></div></div>",
        "page.html"
    );
})

//控制器
myApp1.controller("testController",function($scope){
    $scope.dd={
        text:"holle"
    };
});

//指令
myApp1.directive("hello",function($templateCache){
    return{
        restrict : 'E',
    //    template : '<div>hi angular<div ng-transclude></div></div>',
    //    templateUrl:"page.html",
    //调用缓存机制中的模板
        templateUrl : "page.html",
        transclude : true
    }
})