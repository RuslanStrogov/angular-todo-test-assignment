import { Component, Input, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TodoItem } from '../../todo/todo.model';
import { AddTodoService } from './add-todo.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css'],
  viewProviders: [AddTodoService]
})
export class AddTodoComponent {

  public get currentTodo(): TodoItem {
    return this.addTodoService.currentTodo;
  }

  @Input()
  public set currentTodo(todo: TodoItem) {
    this.addTodoService.currentTodo = todo;
  }

  @Output()
  public get todoItemEdit() {
    return this.addTodoService.todoItemEdit;
  }

  @Output()
  public get todoItemCreate() {
    return this.addTodoService.todoItemCreate;
  }

  constructor(private addTodoService: AddTodoService) {
  }

  public save(value: NgForm) {
    this.addTodoService.save(value);
  }
}
