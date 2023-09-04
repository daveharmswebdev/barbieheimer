import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { ITodoListItem } from '../models/ITodoListItem';
import { Action, createReducer, on } from '@ngrx/store';
import * as TodoActions from './todos.actions';

export interface ITodoState extends EntityState<ITodoListItem> {
  page: number;
  pageSize: number;
  totalCount: number;
  totalPages: number;
  selectedTodoId: number | null;
  loading: boolean;
  error: any | null;
}

export const adapter: EntityAdapter<ITodoListItem> =
  createEntityAdapter<ITodoListItem>();

export const initialTodoState: ITodoState = adapter.getInitialState({
  page: 1,
  pageSize: 10,
  totalCount: 0,
  totalPages: 0,
  selectedTodoId: null,
  loading: false,
  error: null,
});

export const reducer = createReducer(
  initialTodoState,
  on(TodoActions.loadTodos, state => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(
    TodoActions.loadTodosSuccess,
    (state, { response: { page, pageSize, totalCount, totalPages, items } }) =>
      adapter.upsertMany(items, {
        ...state,
        loading: false,
        error: null,
        page,
        pageSize,
        totalCount,
        totalPages,
      })
  ),
  on(TodoActions.loadTodosFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);

export function todosReducer(state: ITodoState | undefined, action: Action) {
  return reducer(state, action);
}

const { selectIds, selectEntities, selectAll, selectTotal } =
  adapter.getSelectors();

export const selectTodoEntities = selectEntities;
export const selectAllTodos = selectAll;
