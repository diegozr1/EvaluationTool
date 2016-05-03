angular.module('todoApp', [])
  .controller('TodoListController', function($http) {
    var todoList = this;

    //todoList.todos = [];

    $http.get("https://api.myjson.com/bins/2rm2s")
        .then(function(response) {
            todoList.todos = response.data;
        });


    todoList.addTodo = function() {
      todoList.todos.push({text:todoList.todoText, done:false});
      todoList.todoText = '';
    };

    todoList.remaining = function() {
      var count = 0;
      angular.forEach(todoList.todos, function(todo) {
        count += todo.done ? 0 : 1;
      });
      return count;
    };

    todoList.archive = function() {
      var oldTodos = todoList.todos;
      todoList.todos = [];
      angular.forEach(oldTodos, function(todo) {
        if (!todo.done) todoList.todos.push(todo);
      });
    };
  });
