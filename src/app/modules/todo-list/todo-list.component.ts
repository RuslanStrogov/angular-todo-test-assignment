import { ChangeDetectionStrategy, Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';

import { TodoStoreService } from '../todo/todo-store.service';

import { ITodoItem, TodoItem, TodoImportance, ITodoItemStruct } from '../todo/todo.model';

import { AddTodoDialogComponent } from './add-todo/add-todo-dialog/add-todo-dialog.component';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoListComponent implements OnInit, AfterViewInit {

  // TODO:
  public displayedColumns: string[] = [
    'content',
    'createdAt',
    'status',
    'importance',
    'actions'
  ];

  @ViewChild(MatSort) sort: MatSort;

  public todoList$ = this.todoStoreService.getItems();
  public todoListData = new MatTableDataSource<TodoItem>();
  public conditionsList = CONDITIONS_LIST;
  public searchValue: any = {};
  public searchCondition: any = {};
  private _filterMethods = CONDITIONS_FUNCTIONS;

  constructor(
    private todoStoreService: TodoStoreService,
    public dialog: MatDialog
  ) {
  }

  public ngOnInit(): void {
    this.todoList$.subscribe((todos) => {
      this.todoListData.data = todos as TodoItem[];
    });
  }

  public ngAfterViewInit(): void {
    this.todoListData.sort = this.sort;

    this.todoListData.filterPredicate = (p: ITodoItemStruct, filtre: any) => {
      let result = true;
      let keys = Object.keys(p); // keys of the object data

      for (const key of keys) {
        let searchCondition = filtre.conditions[key]; // get search filter method

        if (searchCondition && searchCondition !== 'none') {
          if (filtre.methods[searchCondition](p[key], filtre.values[key]) === false) { // invoke search filter
            result = false; // if one of the filters method not succeed the row will be remove from the filter result
            break;
          }
        }
      }

      return result;
    };

  }

  openAddDialog(todoItem?: TodoItem): void {
    const dialogRef = this.dialog.open(AddTodoDialogComponent, {
      width: '350px',
      panelClass: 'add-todo-dialog',
      data: todoItem
    });

    dialogRef.componentInstance.todoItemEdit.subscribe((item: TodoItem) => this.todoItemEdit(item));
    dialogRef.componentInstance.todoItemCreate.subscribe((item: TodoItem) => this.todoItemCreate(item));

    dialogRef.afterClosed().subscribe(result => {
      // console.log('The dialog was closed', result);
    });
  }

  public todoItemCreate(todoItem: TodoItem) {
    this.todoStoreService.addItem(todoItem);
  }

  public setTodoForEdit(todoItem: TodoItem) {
    this.openAddDialog(todoItem);
  }

  public todoItemEdit(todoItem: TodoItem) {
    this.todoStoreService.updateItem(todoItem);
  }

  public deleteTodo(todoItem: TodoItem) {
    this.todoStoreService.removeItem(todoItem);
  }

  public todoSwitchState(todoItem: TodoItem) {

    //TODO
    if (todoItem.status === undefined) {
      todoItem.status = 'open';
    }

    todoItem.switchState();
    this.todoStoreService.updateItem(todoItem);
  }

  public doFilter = (value: string) => {
    this.todoListData.filter = value.trim().toLocaleLowerCase();
  };

  public applyFilter() {

    let searchFilter: any = {
      values: this.searchValue,
      conditions: this.searchCondition,
      methods: this._filterMethods
    };

    this.todoListData.filter = searchFilter;
  }

  public clearColumn(columnKey: string): void {
    this.searchValue[columnKey] = null;
    this.searchCondition[columnKey] = 'none';
    this.applyFilter();
  }

  public renderImportance(importance: TodoImportance) {
    return TodoImportance[importance];
  }

  public trackByFn(index, item) {
    return item.id;
  }
}

export const CONDITIONS_LIST = [
  { value: 'nono', label: 'Nono' },
  { value: 'is-empty', label: 'Is empty' },
  { value: 'is-not-empty', label: 'Is not empty' },
  { value: 'is-equal', label: 'Is equal' },
  { value: 'is-not-equal', label: 'Is not equal' }
];

export const CONDITIONS_FUNCTIONS = { // search method base on conditions list value
  'is-empty': function(value, filterdValue) {
    return value === '';
  },
  'is-not-empty': function(value, filterdValue) {
    return value !== '';
  },
  'is-equal': function(value, filterdValue) {
    return value == filterdValue;
  },
  'is-not-equal': function(value, filterdValue) {
    return value != filterdValue;
  }
};
