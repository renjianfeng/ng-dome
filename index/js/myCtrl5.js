/**
 * Created by dell4 on 2016/3/18.
 */

var myApp1=angular.module("myApp1",[]);
myApp1.controller("testController4",['$scope',function($scope){
  $scope.usd=function(name){
      alert("hi"+name);
  };
}])
//指令
myApp1.directive("hdd",function(){
    return{
        restrict : 'AE',
        scope:{
            uname : '&'
        },
        template : '<input type="text" ng-model="userName"> <button ng-click="uname({name:userName})">点击</button>'
    }
})