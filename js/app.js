angular.module('CASLAMApp', [
  'ngMaterial',
  'caslam.services.constants',
  'caslam.services.models'
])

.run(function($http){
  // Clear Session Token
  // The Basic Authorization is encrpted by http://decodebase64.com/
  $http.defaults.headers.common['Authorization'] =  'Basic YWN0Y3VyYXRlQGNhc2xvZy5jb20uaGs6Y2FzbDE1Mzk='
  $http.defaults.headers.common['X-DreamFactory-Session-Token'] = undefined;

  // from joomla
  //$scope.useremail = "alexwu1109@gmail.com"



})

.controller('AppCtrl' , function($scope,$mdDialog, Models){

  $scope.appmarket_items = {}

  Models.appMaster_appmarket.get(
    function succ(d){
      console.log(d)
      $scope.appmarket_items = d.record

    },
    function err(d){
      console.log(d)
    }

  )

  // dialog

  $scope.showAdvanced = function(ev, item) {
    $scope.item = item
    $mdDialog.show({
      clickOutsideToClose: true,
      controller: DialogController,
      templateUrl: 'templates/dialog1.tmpl.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      locals: {item:$scope.item}
    })
    .then(function(answer) {
      $scope.alert = 'You said the information was "' + answer + '".';
    }, function() {
      $scope.alert = 'You cancelled the dialog.';
    });
  };
})

function DialogController($scope, $mdDialog, item) {
  console.log(item)
  $scope.item = item
  $scope.hide = function() {
    $mdDialog.hide();
  };
  $scope.cancel = function() {
    $mdDialog.cancel();
  };
  $scope.answer = function(answer) {
    $mdDialog.hide(answer);
  };
}
