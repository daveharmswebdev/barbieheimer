import { ITodoListItem } from './ITodoListItem';

export interface IPageableTodoState {
  page: number;
  pageSize: number;
  totalPages: number;
  totalCount: number;
  todos: ITodoListItem[];
}
