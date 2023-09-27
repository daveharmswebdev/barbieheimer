import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ITodoState } from '../store/todos.reducer';
import { BehaviorSubject, Observable, Subject, takeUntil, tap } from 'rxjs';
import { IPageableTodoState } from '../models/IPageableTodoState';
import { selectTodosPaginationState } from '../store/todos.selector';
import { PageEvent } from '@angular/material/paginator';
import { loadTodos } from '../store/todos.actions';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements OnInit, OnDestroy {
  destroy$ = new Subject<boolean>();
  paginatedTodosState$: Observable<IPageableTodoState> = this.store.select(
    selectTodosPaginationState
  );

  private _pageSubject = new BehaviorSubject<PageEvent>({
    pageSize: 10,
    previousPageIndex: undefined,
    pageIndex: 0,
    length: 0,
  } as PageEvent);

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
    this._pageSubject
      .pipe(takeUntil(this.destroy$))
      .subscribe(({ pageSize, pageIndex }) =>
        this.store.dispatch(
          loadTodos({
            page: pageIndex + 1,
            pageSize,
            search: '',
            sortBy: 'id',
            isAscending: true,
          })
        )
      );
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  pageEvent(event: PageEvent) {
    this._pageSubject.next(event);
  }
}
