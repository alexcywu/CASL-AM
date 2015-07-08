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
})


.controller('AppCtrl' , function($scope, Models){

  Models.appMaster_appmarket.get(
    function succ(d){
      console.log(d)
    },
    function err(d){
      console.log(d)
    }

  )
})
