import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

// import { TODOItem } from '@app/shared/models/todo-item';
import { TodoItem } from '../../modules/todo/todo.model';

@Component({
  selector: 'app-todo-item-card',
  templateUrl: './todo-item-card.component.html',
  styleUrls: ['./todo-item-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoItemCardComponent {
  @Input() public todoItem: TodoItem;
  @Input() public readOnlyTODO: boolean;
  @Output() public todoDelete = new EventEmitter<TodoItem>();
  @Output() public todoEdit = new EventEmitter<TodoItem>();

  public completeClick() {
    //TODO
    console.log('TODO completeClick')
    this.todoItem.switchState();
    // this.todoItem.completed = !this.todoItem.completed;
  }

  public deleteClick() {
    this.todoDelete.emit(this.todoItem);
  }

  public editClick() {
    this.todoEdit.emit(this.todoItem);
  }
}
