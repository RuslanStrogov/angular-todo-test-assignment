import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';

import { TodoItem, TodoImportance } from '../../modules/todo/todo.model';

@Component({
  selector: 'app-todo-item-list-row',
  templateUrl: './todo-item-list-row.component.html',
  styleUrls: ['./todo-item-list-row.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoItemListRowComponent {
  @Input() public todoItem: TodoItem;
  @Output() public todoDelete = new EventEmitter<TodoItem>();
  @Output() public todoEdit = new EventEmitter<TodoItem>();
  @Output() public todoSwitchState = new EventEmitter<TodoItem>();

  constructor() {
  }

  public renderImportance(importance: TodoImportance) {
    return TodoImportance[importance];
  }

  public switchStateClick() {
    this.todoSwitchState.emit(this.todoItem);
  }

  public deleteClick() {
    this.todoDelete.emit(this.todoItem);
  }

  public editClick() {
    this.todoEdit.emit(this.todoItem);
  }
}
