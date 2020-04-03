import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../shared/shared.module';
import { TodoListComponent } from './todo-list.component';
import { TodoListRoutes } from './todo-list.routing';
import { AddTodoModule } from './add-todo/add-todo.module';
import { DuedateTodayCountPipe } from './duedate-today-count.pipe';

//TODO
import { AddTodoService } from './add-todo/add-todo.service';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    TodoListRoutes,
    AddTodoModule,
  ],
  declarations: [TodoListComponent, DuedateTodayCountPipe],
  providers: [
    AddTodoService,
   ],
})
export class TodoListModule {}
