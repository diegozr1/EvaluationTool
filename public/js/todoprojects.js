angular.module('todoApp', [])
    .controller('TodoListController', function($http) {
        var todoList = this;

        var ref = new Firebase("https://evaluationtool.firebaseio.com/");

        $http.get("https://evaluationtool.firebaseio.com/.json")
            .then(function(response) {
                todoList.todos = response.data;
            });

        todoList.addTodo = function() {
            ref.push().set({text:todoList.todoText, done:false})
            todoList.todos.push({text:todoList.todoText, done:false});
            todoList.todoText = '';
            location.reload();
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
