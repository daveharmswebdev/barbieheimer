import { createAction, props } from '@ngrx/store';
import { ITodoListItem } from '../models/ITodoListItem';
import { IPageAble } from '../models/IPageAble';

// Action to initiate loading of todos
export const loadTodos = createAction(
  '[Todos] Load Todos',
  props<{
    page?: number;
    pageSize?: number;
    search?: string;
    sortBy?: string;
    isAscending: boolean;
    status?: number;
  }>()
);

// Action to handle successful loading of todos
export const loadTodosSuccess = createAction(
  '[Todos] Load Todos Success',
  props<{ response: IPageAble<ITodoListItem> }>()
);

// Action to handle failure in loading todos
export const loadTodosFailure = createAction(
  '[Todos] Load Todos Failure',
  props<{ error: any }>()
);

// You can add more actions for other operations like adding, updating, deleting todos, etc.
