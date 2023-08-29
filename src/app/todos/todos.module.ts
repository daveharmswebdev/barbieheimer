import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosComponent } from './todos/todos.component';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';
import { TodosRoutingModule } from './todos-routing.module';

@NgModule({
  declarations: [TodosComponent, TodoDetailComponent],
  imports: [CommonModule, TodosRoutingModule],
})
export class TodosModule {}
