import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { IPageAble } from '../models/IPageAble';
import { ITodoListItem } from '../models/ITodoListItem';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-pagination-option',
  templateUrl: './pagination-option.component.html',
  styleUrls: ['./pagination-option.component.scss'],
})
export class PaginationOptionComponent implements OnInit {
  pagedTodos!: IPageAble<ITodoListItem>;

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
    this.todoService
      .getPagedTodos(pageIndex + 1, pageSize)
      .subscribe(pagedTodos => (this.pagedTodos = pagedTodos));
  }
}
