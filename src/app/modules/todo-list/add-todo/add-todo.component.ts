import { Component, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

import { ITodoItemStruct, ITodoItem, TodoItem, todoItemFactory, todoItemFromStructFactory } from '../../todo/todo.model';
import { AddTodoService } from './add-todo.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css'],
  viewProviders: [AddTodoService]
})
export class AddTodoComponent implements OnInit {
  // @Input()
  // public isLoading = false;

  public get currentTODO(): TodoItem {
    return this.addTodoService.currentTODO;
  }
  @Input()
  public set currentTODO(todo: TodoItem) {
    this.addTodoService.currentTODO = todo;
  }

  @Output()
  public get todoItemEdit() {
    return this.addTodoService.TodoItemEdit;
  }

  @Output()
  public get todoItemCreate() {
    return this.addTodoService.TodoItemCreate;
  }

  constructor(private addTodoService: AddTodoService) {}

  public ngOnInit() {}

  public save(form: NgForm) {
    this.addTodoService.save(form);
  }
}
