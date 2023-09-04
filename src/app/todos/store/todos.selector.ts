import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromTodos from './todos.reducer';
import { IPageableTodoState } from '../models/IPageableTodoState';

export const selectTodosState =
  createFeatureSelector<fromTodos.ITodoState>('todos');

export const selectAllTodos = createSelector(
  selectTodosState,
  fromTodos.selectAllTodos
);

export const selectTodosPaginationState = createSelector(
  selectTodosState,
  selectAllTodos,
  ({ page, pageSize, totalPages, totalCount }, todos) =>
    ({
      page,
      pageSize,
      totalPages,
      totalCount,
      todos,
    }) as IPageableTodoState
);
