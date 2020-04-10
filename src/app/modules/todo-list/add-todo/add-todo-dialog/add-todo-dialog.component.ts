import { ChangeDetectionStrategy, Component, Input, Output, HostListener, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { TodoItem } from '../../../todo/todo.model';
import { AddTodoService } from './../add-todo.service';

export interface DialogData {
  currentTodo: TodoItem;
}

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-add-todo-dialog',
  templateUrl: 'add-todo-dialog.component.html',
  styleUrls: ['./add-todo-dialog.component.css'],
  viewProviders: [AddTodoService]
})
export class AddTodoDialogComponent {

  // currentTodo: TodoItem;

  public get currentTodo(): TodoItem {
    return this.addTodoService.currentTodo;
  }

  @Input()
  public set currentTodo(todo: TodoItem) {
    this.addTodoService.currentTodo = todo;
  }

  constructor(
    private addTodoService: AddTodoService,
    private dialogRef: MatDialogRef<AddTodoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: TodoItem
    // @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {
    this.currentTodo = data;
  }

  @Output()
  public get todoItemEdit() {
    return this.addTodoService.todoItemEdit;
  }

  @Output()
  public get todoItemCreate() {
    return this.addTodoService.todoItemCreate;
  }

  public save(form: NgForm) {
    this.addTodoService.save(form);
    this.dialogRef.close(form);
  }

  public confirm() {
    this.dialogRef.close(true);
  }

  public cancel() {
    this.dialogRef.close(false);
  }

}
