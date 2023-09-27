import { Component } from '@angular/core';
import { TodoService } from '../todo.service';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter, mergeMap, of } from 'rxjs';

@Component({
  selector: 'app-type-ahead',
  templateUrl: './type-ahead.component.html',
  styleUrls: ['./type-ahead.component.scss'],
})
export class TypeAheadComponent {
  todoFc = new FormControl<any>(undefined);

  todoDropDownOptions$ = this.todoFc.valueChanges.pipe(
    debounceTime(250),
    distinctUntilChanged(),
    mergeMap((value: string) => this.todoService.getTodoDropdown(value))
  );

  constructor(private todoService: TodoService) {}

  displayFn(option: { id: number; title: string }): string {
    return option && option.title ? option.title : '';
  }
}
