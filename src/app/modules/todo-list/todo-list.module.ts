import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../../shared/shared.module';
import { TodoListComponent } from './todo-list.component';
import { TodoListRoutes } from './todo-list.routing';
import { AddTodoModule } from './add-todo/add-todo.module';
import { TotalCountPipe, ActiveCountPipe, DoneCountPipe, TodayCountPipe } from './todo-list.pipe';

//TODO
import { AddTodoService } from './add-todo/add-todo.service';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    SharedModule,
    TodoListRoutes,
    AddTodoModule
  ],
  declarations: [
    TodoListComponent,
    TotalCountPipe,
    ActiveCountPipe,
    DoneCountPipe,
    TodayCountPipe
  ],
  providers: [
    AddTodoService
  ]
})
export class TodoListModule {
}
