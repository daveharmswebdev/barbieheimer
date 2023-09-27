import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosOtherComponent } from './todos-other.component';

describe('TodosOtherComponent', () => {
  let component: TodosOtherComponent;
  let fixture: ComponentFixture<TodosOtherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodosOtherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodosOtherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
