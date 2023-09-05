import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosComponent } from './todos/todos.component';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';
import { TodosRoutingModule } from './todos-routing.module';
import { MatTableModule } from '@angular/material/table';
import { StoreModule } from '@ngrx/store';
import { todosReducer } from './store/todos.reducer';
import { EffectsModule } from '@ngrx/effects';
import { TodosEffects } from './store/todos.effects';
import { MatPaginatorModule } from '@angular/material/paginator';
import { TodoFilterComponent } from './todo-filter/todo-filter.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
  declarations: [TodosComponent, TodoDetailComponent, TodoFilterComponent],
  imports: [
    CommonModule,
    TodosRoutingModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    MatSortModule,
    StoreModule.forFeature('todos', todosReducer),
    EffectsModule.forFeature([TodosEffects]),
    MatPaginatorModule,
    ReactiveFormsModule,
  ],
})
export class TodosModule {}
