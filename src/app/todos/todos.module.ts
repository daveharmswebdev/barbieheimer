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

@NgModule({
  declarations: [TodosComponent, TodoDetailComponent],
  imports: [
    CommonModule,
    TodosRoutingModule,
    MatTableModule,
    StoreModule.forFeature('todos', todosReducer),
    EffectsModule.forFeature([TodosEffects]),
    MatPaginatorModule,
  ],
})
export class TodosModule {}
