import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';

import {
  FormControl,
  FormGroupDirective,
  FormBuilder,
  FormGroup,
  NgForm,
  Validators
} from '@angular/forms';

import { ErrorStateMatcher } from '@angular/material/core';
import { MatCheckbox } from '@angular/material/checkbox';

import { ITodoItem, TodoItem, TodoImportance, ITodoStatus } from '../../../todo/todo.model';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-add-todo-presentation',
  templateUrl: './add-todo-presentation.component.html',
  styleUrls: ['./add-todo-presentation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddTodoPresentationComponent implements OnInit {

  todoForm: FormGroup;
  matcher = new MyErrorStateMatcher();

  date = new FormControl(new Date());
  serializedDate = new FormControl((new Date()).toISOString());

  todoImportance = TodoImportance;
  importances: any[] = Object.keys(this.todoImportance).filter(k => !isNaN(Number(k)));

  falseValue: ITodoStatus = 'open';
  trueValue: ITodoStatus = 'done';

  checkboxChange(checkbox: MatCheckbox, checked: ITodoStatus) {
    const customValue = checked ? this.trueValue : this.falseValue;
    checkbox.value = customValue;
    this.todoForm.patchValue({ status: customValue });
  }

  @Input() public currentTodo: TodoItem;
  @Output() public saved = new EventEmitter<NgForm>();

  constructor(private formBuilder: FormBuilder) {
  }

  public ngOnInit() {
    this.prepareForm();
  }

  public prepareForm() {
    this.todoForm = this.formBuilder.group({
      content: [this.currentTodo ? this.currentTodo.content : '', Validators.required],
      createdAt: [this.currentTodo ? this.currentTodo.createdAt : new Date],
      status: [this.currentTodo ? this.currentTodo.status : 'open'],
      importance: [this.currentTodo ? this.currentTodo.status : null, Validators.required]
    });
  }

  public onFormSubmit() {
    if (this.todoForm.valid) {
      this.saved.emit(this.todoForm.value);
      // this.todoForm.reset();
    } else {
      return;
    }
  }

}
