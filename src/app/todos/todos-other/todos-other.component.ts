import { Component } from '@angular/core';
import { IPageAble } from '../models/IPageAble';
import { ITodoListItem } from '../models/ITodoListItem';
import { Sort } from '@angular/material/sort';
import { TodoService } from '../todo.service';
import { PageEvent } from '@angular/material/paginator';
import { IFilterBody } from '../models/IFilterBody';

@Component({
  selector: 'app-todos-other',
  templateUrl: './todos-other.component.html',
  styleUrls: ['./todos-other.component.scss'],
})
export class TodosOtherComponent {
  pagedTodos!: IPageAble<ITodoListItem>;
  pageEvent: PageEvent = {
    length: 0,
    pageIndex: 0,
    pageSize: 10,
  };
  sort: Sort = { active: 'id', direction: 'asc' };
  filterBody: IFilterBody = { search: '', status: 0 };

  displayedColumns: string[] = [
    'id',
    'title',
    'description',
    'status',
    'createdAt',
    'modifiedAt',
  ];

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.todoService
      .getPagedTodos()
      .subscribe(pagedTodos => (this.pagedTodos = pagedTodos));
  }

  handlePageEvent({ pageSize, pageIndex }: PageEvent) {
    this.pageEvent = { pageSize, pageIndex, length: 0 };
    const { active, direction } = this.sort;
    const { search, status } = this.filterBody;
    this.todoService
      .getPagedTodos(
        pageIndex + 1,
        pageSize,
        search,
        active,
        direction === 'asc',
        status
      )
      .subscribe(pagedTodos => (this.pagedTodos = pagedTodos));
  }

  sortData({ active, direction }: Sort) {
    this.sort = { active, direction };
    const { pageIndex, pageSize } = this.pageEvent;
    this.todoService
      .getPagedTodos(pageIndex + 1, pageSize, '', active, direction === 'asc')
      .subscribe(pagedTodos => (this.pagedTodos = pagedTodos));
  }

  handleFilterEmit({ search, status }: IFilterBody) {
    this.filterBody = { search, status };
    const { active, direction } = this.sort;
    const { pageIndex, pageSize } = this.pageEvent;
    this.todoService
      .getPagedTodos(
        pageIndex + 1,
        pageSize,
        search,
        active,
        direction === 'asc',
        status
      )
      .subscribe(pagedTodos => (this.pagedTodos = pagedTodos));
  }
}
