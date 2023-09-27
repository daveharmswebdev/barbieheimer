import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationOptionComponent } from './pagination-option.component';

describe('PaginationOptionComponent', () => {
  let component: PaginationOptionComponent;
  let fixture: ComponentFixture<PaginationOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginationOptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginationOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
