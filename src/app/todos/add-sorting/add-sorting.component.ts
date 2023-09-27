import { Component } from '@angular/core';
import {
  BehaviorSubject,
  combineLatest,
  Observable,
  Subject,
  takeUntil,
  tap,
} from 'rxjs';
import { IPageableTodoState } from '../models/IPageableTodoState';
import { selectTodosPaginationState } from '../store/todos.selector';
import { PageEvent } from '@angular/material/paginator';
import { Store } from '@ngrx/store';
import { ITodoState } from '../store/todos.reducer';
import { loadTodos } from '../store/todos.actions';
import { Sort } from '@angular/material/sort';

@Component({
  selector: 'app-add-sorting',
  templateUrl: './add-sorting.component.html',
  styleUrls: ['./add-sorting.component.scss'],
})
export class AddSortingComponent {
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
    combineLatest([this._pageSubject, this._sortSubject])
      .pipe(tap(console.log), takeUntil(this.destroy$))
      .subscribe(([{ pageSize, pageIndex }, { active, direction }]) =>
        this.store.dispatch(
          loadTodos({
            page: pageIndex + 1,
            pageSize,
            search: '',
            sortBy: active,
            isAscending: direction === 'asc',
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

  sortData(sort: Sort) {
    this._sortSubject.next(sort);
  }
}
