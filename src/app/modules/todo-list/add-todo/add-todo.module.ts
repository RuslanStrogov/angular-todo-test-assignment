import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../../../shared/shared.module';
import { AddTodoComponent } from './add-todo.component';
import { AddTodoPresentationComponent } from './add-todo-presentation/add-todo-presentation.component';
import { AddTodoDialogComponent } from './add-todo-dialog/add-todo-dialog.component';

@NgModule({
  imports: [FormsModule, ReactiveFormsModule, CommonModule, SharedModule],
  declarations: [AddTodoComponent, AddTodoPresentationComponent, AddTodoDialogComponent],
  exports: [AddTodoComponent, AddTodoDialogComponent]
})
export class AddTodoModule {
}
