import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';

// import { TODOItem } from '@app/shared/models/todo-item';
import { TodoItem } from '../../modules/todo/todo.model';

@Component({
  selector: 'app-todo-item-list-row',
  templateUrl: './todo-item-list-row.component.html',
  styleUrls: ['./todo-item-list-row.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoItemListRowComponent implements OnInit {
  @Input() public todoItem: TodoItem;
  @Input() public readOnlyTODO: boolean;
  @Output() public todoDelete = new EventEmitter<TodoItem>();
  @Output() public todoEdit = new EventEmitter<TodoItem>();
  @Output() public todoComplete = new EventEmitter<TodoItem>();

  constructor() {}

  public ngOnInit() {}

  public completeClick() {
    //TODO
    console.log('TODO completeClick');
    // const newTodo = {
    //   ...this.todoItem,
    //   // completed: !this.todoItem.completed
    // };

    // this.todoComplete.emit(newTodo);
  }

  public deleteClick() {
    this.todoDelete.emit(this.todoItem);
  }

  public editClick() {
    this.todoEdit.emit(this.todoItem);
  }
}
