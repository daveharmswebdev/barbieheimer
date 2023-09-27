import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { ITodoListItem } from '../models/ITodoListItem';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-worst',
  templateUrl: './worst.component.html',
  styleUrls: ['./worst.component.scss'],
})
export class WorstComponent implements OnInit {
  todos: ITodoListItem[] | undefined;

  todos$: Observable<ITodoListItem[]> = this.todoService
    .getPagedTodos()
    .pipe(map(pagedTodos => pagedTodos.items));

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.todoService
      .getPagedTodos()
      .subscribe(pagedTodos => (this.todos = pagedTodos.items));
  }
}
