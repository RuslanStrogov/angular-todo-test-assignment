import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';

import { TodoItem, TodoImportance } from '../../modules/todo/todo.model';

@Component({
  selector: 'app-todo-item-card',
  templateUrl: './todo-item-card.component.html',
  styleUrls: ['./todo-item-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoItemCardComponent {
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
