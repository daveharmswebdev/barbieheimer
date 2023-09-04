import { Component, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Store } from '@ngrx/store';
import { ITodoState } from '../store/todos.reducer';
import { IPageableTodoState } from '../models/IPageableTodoState';
import { selectTodosPaginationState } from '../store/todos.selector';
import { loadTodos } from '../store/todos.actions';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  paginatedTodosState$: Observable<IPageableTodoState> = this.store
    .select(selectTodosPaginationState)
    .pipe(tap(console.log));

  displayedColumns: string[] = [
    'id',
    'title',
    'description',
    'status',
    'createdAt',
    'modifiedAt',
  ];
  constructor(private store: Store<ITodoState>) {}

  ngOnInit() {
    this.store.dispatch(
      loadTodos({ page: 1, pageSize: 10, search: '', sortBy: '', status: 0 })
    );
  }

  pageEvent($event: any) {}
}
