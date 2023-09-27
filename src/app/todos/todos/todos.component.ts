import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  BehaviorSubject,
  combineLatest,
  Observable,
  Subject,
  takeUntil,
  tap,
} from 'rxjs';
import { Store } from '@ngrx/store';
import { ITodoState } from '../store/todos.reducer';
import { IPageableTodoState } from '../models/IPageableTodoState';
import { selectTodosPaginationState } from '../store/todos.selector';
import { loadTodos } from '../store/todos.actions';
import { PageEvent } from '@angular/material/paginator';
import { IFilterBody } from '../models/IFilterBody';
import { Sort } from '@angular/material/sort';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit, OnDestroy {
  destroy$ = new Subject<boolean>();
  paginatedTodosState$: Observable<IPageableTodoState> = this.store
    .select(selectTodosPaginationState)
    .pipe(tap(console.log));

  private _pageSubject = new BehaviorSubject<PageEvent>({
    pageSize: 10,
    previousPageIndex: undefined,
    pageIndex: 0,
    length: 0,
  } as PageEvent);

  private _filterSubject = new BehaviorSubject<IFilterBody>({
    search: '',
    status: 0,
  });

  private _sortSubject = new BehaviorSubject<Sort>({
    active: 'id',
    direction: 'asc',
  });

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
    combineLatest([this._pageSubject, this._filterSubject, this._sortSubject])
      .pipe(tap(console.log), takeUntil(this.destroy$))
      .subscribe(
        ([
          { pageSize, pageIndex },
          { search, status },
          { active, direction },
        ]) =>
          this.store.dispatch(
            loadTodos({
              page: pageIndex + 1,
              pageSize,
              search,
              sortBy: active,
              isAscending: direction === 'asc',
              status,
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

  handleFilterEmit(filterBody: IFilterBody) {
    this._filterSubject.next(filterBody);
  }

  sortData(sort: Sort) {
    this._sortSubject.next(sort);
  }
}
