import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { InvalidDateValidatorDirective } from './invalid-date.directive';
import { AppMaterialModule } from './app-material/app-material.module';
import { CardListModule } from './cards-list/cards-list.module';
import { TodoItemCardComponent } from './todo-item-card/todo-item-card.component';
import { TodoItemListRowComponent } from './todo-item-list-row/todo-item-list-row.component';
import { SuccessDialogComponent } from './dialogs/success-dialog/success-dialog.component';
import { ErrorDialogComponent } from './dialogs/error-dialog/error-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    CardListModule,
    AppMaterialModule,
    FlexLayoutModule
  ],
  declarations: [
    InvalidDateValidatorDirective,
    TodoItemListRowComponent,
    TodoItemCardComponent,
    SuccessDialogComponent,
    ErrorDialogComponent
  ],
  exports: [
    InvalidDateValidatorDirective,
    CardListModule,
    TodoItemListRowComponent,
    TodoItemCardComponent,
    AppMaterialModule,
    FlexLayoutModule,
    SuccessDialogComponent,
    ErrorDialogComponent
  ]
})
export class SharedModule {
}
