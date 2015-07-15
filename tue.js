angular.module('myApp', []).controller('userCtrl', function($scope) {
$scope.Emp.ID = '';
$scope.fName = '';
$scope.lName = '';
$scope.Designation = '';
$scope.passw1 = '';
$scope.passw2 = '';
$scope.Employees = [
{ Emp.ID:1, fName:'Hege',  lName:"Pege", Designation:"Developer" },
{ Emp.ID:2, fName:'Kim',   lName:"Pim", Designation:"Architect"  },
{ Emp.ID:3, fName:'Sal',   lName:"Smith", Designation:"Administrator" },
{ Emp.ID:4, fName:'Jack',  lName:"Jones", Designation:"Tester" },
{ Emp.ID:5, fName:'John',  lName:"Doe", Designation:"Tech-Support" },
{ Emp.ID:6, fName:'Peter', lName:"Pan", Designation:"Lead" }
];
$scope.edit = true;
$scope.error = false;
$scope.incomplete = false; 

$scope.editEmployee = function(id) {
  if (id == 'new') {
    $scope.edit = true;
    $scope.incomplete = true;
	$scope.Emp.ID = '';
    $scope.fName = '';
    $scope.lName = '';
	$scope.Designation = '';
    } else {
    $scope.edit = false;
	$scope.Emp.ID = $scope.Employees[id-1].Emp.ID; 
    $scope.fName = $scope.Employees[id-1].fName;
    $scope.lName = $scope.Employees[id-1].lName; 
    $scope.Designation = $scope.Employees[id-1].Designation; 
	

	
  }
};

$scope.$watch('passw1',function() {$scope.test();});
$scope.$watch('passw2',function() {$scope.test();});
$scope.$watch('Emp.ID', function() {$scope.test();});
$scope.$watch('fName', function() {$scope.test();});
$scope.$watch('lName', function() {$scope.test();});
$scope.$watch('Designation', function() {$scope.test();});


$scope.test = function() {
  if ($scope.passw1 !== $scope.passw2) {
    $scope.error = true;
    } else {
    $scope.error = false;
  }
  $scope.incomplete = false;
  if ($scope.edit && (!$scope.fName.length ||
  !$scope.lName.length ||
  !$scope.passw1.length || !$scope.passw2.length)) {
       $scope.incomplete = true;
  }
};

});
