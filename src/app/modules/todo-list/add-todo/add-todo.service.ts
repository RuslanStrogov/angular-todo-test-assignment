import { EventEmitter, Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import {
  ITodoItem,
  TodoItem,
  TodoImportance
} from '../../todo/todo.model';

@Injectable()
export class AddTodoService {

  private _currentTodo: TodoItem = new TodoItem('', TodoImportance.Low, 'open');

  public get currentTodo(): ITodoItem {
    return this._currentTodo;
  }

  public set currentTodo(value: ITodoItem) {
    this._currentTodo = { ...value };
  }

  public todoItemEdit = new EventEmitter<TodoItem>();
  public todoItemCreate = new EventEmitter<TodoItem>();

  public save(form: NgForm) {

    const todoToSave = {
      ...this.currentTodo
    };

    if (this.currentTodo.id) {
      this.todoItemEdit.next(todoToSave);
    } else {
      //fuuuu
      todoToSave.status = 'open';
      this.todoItemCreate.next(todoToSave);
    }
  }
}
