import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorstComponent } from './worst.component';

describe('WorstComponent', () => {
  let component: WorstComponent;
  let fixture: ComponentFixture<WorstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorstComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
