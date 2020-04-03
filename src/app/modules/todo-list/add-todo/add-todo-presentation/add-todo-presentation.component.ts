import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';
import { NgForm } from '@angular/forms';

import { TodoItem } from '../../../todo/todo.model';

@Component({
  selector: 'app-add-todo-presentation',
  templateUrl: './add-todo-presentation.component.html',
  styleUrls: ['./add-todo-presentation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddTodoPresentationComponent implements OnInit {
  @Input() public currentTODO: TodoItem;

  // @Input() public isLoading = false;

  @Output() public saved = new EventEmitter<NgForm>();

  constructor() {}

  public ngOnInit() {}

  public save(form: NgForm) {
    this.saved.emit(form);
  }
}
