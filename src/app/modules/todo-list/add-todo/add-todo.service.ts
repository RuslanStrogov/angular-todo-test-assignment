import { EventEmitter, Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';

import {
  ITodoItemStruct,
  ITodoItem,
  TodoItem,
  todoItemFromStructFactory,
  todoItemFactory
 } from '../../todo/todo.model';

@Injectable()
export class AddTodoService {
  public get currentTODO(): TodoItem {
    return this._currentTODO;
  }

  public set currentTODO(value: ITodoItem) {
    this._currentTODO = { ...value };
  }

  public TodoItemEdit = new EventEmitter<TodoItem>();
  public TodoItemCreate = new EventEmitter<TodoItem>();

  private _currentTODO: ITodoItem = new TodoItem('', 0, 'open');

  public save(form: NgForm) {
    if (!form.valid) {
      // tslint:disable-next-line:no-console
      console.log('Invalid form!');
      // TODO: display form errors
      return;
    }

    const todoToSave = {
      ...this.currentTODO
    };

    if (todoToSave.id) {
      this.TodoItemEdit.next(todoItemFromStructFactory(todoToSave));
      form.resetForm();
    } else {
      this.TodoItemCreate.next(todoItemFromStructFactory(todoToSave));
      form.resetForm();
    }
  }
}
