/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
      constructor()
      {
        this.Todo = [];
      }
      add(string)
      {
        this.Todo.push(string);
      }
      remove(index)
      {
        this.Todo.splice(index,1);
      }
      update(index,updatedTodo)
      {
        if(index < this.Todo.length)
        {
          this.Todo[index] = updatedTodo;
        }
      }
      getAll()
      {
        return this.Todo;
      }
      get(index)
      {
        if(index < this.Todo.length)
        {
          return this.Todo[index];
        }
        return null;
      }
      clear()
      {
        this.Todo = [];
      }

}

module.exports = Todo;
