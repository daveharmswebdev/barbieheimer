import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ITodoListItem } from './models/ITodoListItem';
import { IPageAble } from './models/IPageAble';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor(private http: HttpClient) {}

  getPagedTodos(
    page = 1,
    pageSize = 10,
    search = '',
    sortBy = '',
    isAscending = true,
    status = 0
  ): Observable<IPageAble<ITodoListItem>> {
    const queryParams = new HttpParams()
      .append('page', page)
      .append('pageSize', pageSize)
      .append('search', search)
      .append('sortBy', sortBy)
      .append('isAscending', isAscending)
      .append('status', status);

    return this.http.get<IPageAble<ITodoListItem>>(
      'https://localhost:7106/api/Todos/paged',
      { params: queryParams }
    );
  }

  getTodoDropdown(
    value: string = ''
  ): Observable<{ id: number; title: string }[]> {
    const url =
      value.length > 0
        ? `https://localhost:7106/api/Todos/dropdowns?search=${value}`
        : 'https://localhost:7106/api/Todos/dropdowns';

    return this.http.get<{ id: number; title: string }[]>(url);
  }
}
