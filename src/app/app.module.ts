import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoModule } from './modules/todo/todo.module';
import { SharedModule } from './shared/shared.module';
import { TodoListModule } from './modules/todo-list/todo-list.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    TodoModule,
    SharedModule,
    TodoListModule,
   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
