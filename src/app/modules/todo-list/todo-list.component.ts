import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

// import { TodoListService } from './todo-list.service';
import { TodoStoreService } from '../todo/todo-store.service';

// import { TODOItem } from '@app/shared/models/todo-item';
import { ITodoItem, TodoItem, todoItemFactory } from '../todo/todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoListComponent implements OnInit {
  public todoList$ = this.todoStoreService.getItems();

  // public selectedTodoForEdit$ = this.todoListService.getTodoForEdit$();
  // public selectedTodoForEdit$ = new BehaviorSubject(todoItemFactory('', 0));
  public selectedTodoForEdit$ = new BehaviorSubject<any>({});
  // public selectedTodoForEdit$ = new BehaviorSubject(new TodoItem('', 1, 'open'));
  // public selectedTodoForEdit$ = new BehaviorSubject(new ITodoItem);

  constructor(private todoStoreService: TodoStoreService) {}

  public ngOnInit(): void {}

  public deleteTodo(todoItem: TodoItem) {
    this.todoStoreService.removeItem(todoItem);
  }

  public setTodoForEdit(todoItem: TodoItem) {
    this.selectedTodoForEdit$.next(todoItem);
  }

  /**
   * todoItemEdit
   */
  public todoItemEdit(todoItem: TodoItem) {
    console.log('todoItemEdit', todoItem);
    this.todoStoreService.updateItem(todoItem);
  }

  /**
   * todoItemCreate
   */
  public todoItemCreate(todoItem: TodoItem) {
    console.log('todoItemCreate', todoItem);
    this.todoStoreService.addItem(todoItem);
  }

  public trackByFn(index, item) {
    return item.id;
  }
}
