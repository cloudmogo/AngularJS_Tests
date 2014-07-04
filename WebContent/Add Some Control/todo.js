/**
 * 
 */

function TodoCtrl($scope) {
	$scope.todos = [
	{text:'learn angular', done:true},
	{text:'build an angular app', done:false},
	{text:'A New Angular TO DO', done:true}
	];
	
	$scope.addTodo = function() {
		if(!$scope.todoText) {
			$scope.message = 'You must provide a value for your new Todo';
		} else {
			$scope.todos.push({text:$scope.todoText, done:false});
			$scope.message = 'New Todo Added:' +$scope.todoText;
			$scope.todoText='';
			
		}
	};
	
	$scope.remaining = function() {
		var count = 0;
		angular.forEach($scope.todos,function(todo) {
			count += todo.done ? 0: 1;
		});
		return count;
	};
	
	$scope.archive = function() {
		var oldTodos = $scope.todos;
		$scope.todos = [{text:'Will be added to an Archive', done:true}];
		angular.forEach(oldTodos,function(todo) {
			if(!todo.done) $scope.todos.push(todo);
		});
	};
	$scope.message = '$scope.archive was called';
}