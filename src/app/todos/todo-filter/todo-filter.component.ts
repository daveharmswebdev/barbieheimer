import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { IFilterBody } from '../models/IFilterBody';

@Component({
  selector: 'app-todo-filter',
  templateUrl: './todo-filter.component.html',
  styleUrls: ['./todo-filter.component.scss'],
})
export class TodoFilterComponent {
  form = this.fb.group({
    search: '',
    status: 0,
  });

  @Output() emitFilterBody = new EventEmitter<IFilterBody>();

  constructor(private fb: FormBuilder) {}

  filter() {
    console.log(this.form.value);
    this.emitFilterBody.emit(this.form.value as IFilterBody);
  }
}
