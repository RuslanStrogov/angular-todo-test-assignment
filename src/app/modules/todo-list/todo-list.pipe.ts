import { Pipe, PipeTransform } from '@angular/core';

import { TodoItem } from '../todo/todo.model';

@Pipe({
  name: 'totalCount'
})
export class TotalCountPipe implements PipeTransform {
  public transform(todoItems: TodoItem[]): any {
    return todoItems.length;
  }
}

@Pipe({
  name: 'activeCount'
})
export class ActiveCountPipe implements PipeTransform {
  public transform(todoItems: TodoItem[]): any {
    return todoItems.filter((todo) => todo.status === 'open').length;
  }
}

@Pipe({
  name: 'doneCount'
})
export class DoneCountPipe implements PipeTransform {
  public transform(todoItems: TodoItem[]): any {
    return todoItems.filter((todo) => todo.status === 'done').length;
  }
}

@Pipe({
  name: 'todayCount'
})
export class TodayCountPipe implements PipeTransform {
  public transform(todoItems: TodoItem[], args?: any): any {
    return todoItems.filter((todo) => this.isToday(new Date(todo.createdAt))).length;
  }

  private isToday(someDate) {
    const today = new Date();
    return (
      someDate.getDate() === today.getDate() &&
      someDate.getMonth() === today.getMonth() &&
      someDate.getFullYear() === today.getFullYear()
    );
  }
}
