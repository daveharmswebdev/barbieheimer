import { Component } from '@angular/core';
import { IPageAble } from '../models/IPageAble';
import { ITodoListItem } from '../models/ITodoListItem';
import { TodoService } from '../todo.service';
import { PageEvent } from '@angular/material/paginator';
import { Sort } from '@angular/material/sort';

@Component({
  selector: 'app-add-sorting-other',
  templateUrl: './add-sorting-other.component.html',
  styleUrls: ['./add-sorting-other.component.scss'],
})
export class AddSortingOtherComponent {
  pagedTodos!: IPageAble<ITodoListItem>;
  sort: Sort = { active: 'id', direction: 'asc' };

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

  pageEvent({ pageSize, pageIndex }: PageEvent) {
    const { active, direction } = this.sort;
    this.todoService
      .getPagedTodos(pageIndex + 1, pageSize, '', active, direction === 'asc')
      .subscribe(pagedTodos => (this.pagedTodos = pagedTodos));
  }

  sortData({ active, direction }: Sort) {
    this.sort = { active, direction };
    const { page, pageSize } = this.pagedTodos;
    this.todoService
      .getPagedTodos(page, pageSize, '', active, direction === 'asc')
      .subscribe(pagedTodos => (this.pagedTodos = pagedTodos));
  }
}
