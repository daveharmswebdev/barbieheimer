import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodosComponent } from './todos/todos.component';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';
import { WorstComponent } from './worst/worst.component';
import { PaginationComponent } from './pagination/pagination.component';
import { PaginationOptionComponent } from './pagination-option/pagination-option.component';
import { AddSortingComponent } from './add-sorting/add-sorting.component';
import { AddSortingOtherComponent } from './add-sortinging-other/add-sorting-other.component';
import { TodosOtherComponent } from './todos-other/todos-other.component';
import { TypeAheadComponent } from './type-ahead/type-ahead.component';
import { MouseEventComponent } from './mouse-event/mouse-event.component';

const routes: Routes = [
  {
    path: '',
    component: TodosComponent,
  },
  {
    path: 'other',
    component: TodosOtherComponent,
  },
  {
    path: 'mouse',
    component: MouseEventComponent,
  },
  {
    path: 'the-worst',
    component: WorstComponent,
  },
  {
    path: 'typeahead',
    component: TypeAheadComponent,
  },
  {
    path: 'pagination',
    component: PaginationComponent,
  },
  {
    path: 'pagination-other',
    component: PaginationOptionComponent,
  },
  {
    path: 'sorting',
    component: AddSortingComponent,
  },
  {
    path: 'sorting-other',
    component: AddSortingOtherComponent,
  },
  {
    path: ':id',
    component: TodoDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TodosRoutingModule {}
