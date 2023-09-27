import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MouseEventComponent } from './mouse-event.component';

describe('MouseEventComponent', () => {
  let component: MouseEventComponent;
  let fixture: ComponentFixture<MouseEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MouseEventComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MouseEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
