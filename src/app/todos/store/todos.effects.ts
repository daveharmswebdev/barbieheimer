import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { TodoService } from '../todo.service';
import { loadTodos, loadTodosFailure, loadTodosSuccess } from './todos.actions';
import { catchError, exhaustMap, map, of } from 'rxjs';

@Injectable()
export class TodosEffects {
  loadTodos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadTodos),
      exhaustMap(({ page, pageSize, search, sortBy, isAscending, status }) =>
        this.todoService
          .getPagedTodos(page, pageSize, search, sortBy, isAscending, status)
          .pipe(
            map(response => loadTodosSuccess({ response })),
            catchError(error => of(loadTodosFailure(error)))
          )
      )
    )
  );

  constructor(
    private readonly actions$: Actions,
    private todoService: TodoService
  ) {}
}
