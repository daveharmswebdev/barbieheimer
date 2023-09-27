import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { fromEvent, map, Observable, tap } from 'rxjs';

@Component({
  selector: 'app-mouse-event',
  templateUrl: './mouse-event.component.html',
  styleUrls: ['./mouse-event.component.scss'],
})
export class MouseEventComponent implements AfterViewInit {
  @ViewChild('mouseContainer', { static: true }) mouseContainer!: ElementRef;
  mousePosition$!: Observable<{ x: number; y: number }>;
  color$!: Observable<any>;

  ngAfterViewInit() {
    const mouseMove$ = fromEvent<MouseEvent>(
      this.mouseContainer.nativeElement,
      'mousemove'
    );

    this.mousePosition$ = mouseMove$.pipe(
      map(event => {
        const x =
          event.clientX -
          this.mouseContainer.nativeElement.getBoundingClientRect().left;
        const y =
          event.clientY -
          this.mouseContainer.nativeElement.getBoundingClientRect().top;
        return { x, y };
      })
    );

    this.color$ = this.mousePosition$.pipe(
      tap(console.log),
      map(({ x, y }) => {
        const colorA = Math.min(Math.floor(x / 3), 255);
        const colorB = Math.min(Math.floor(y), 255);

        return `rgb(${colorA}, ${colorB}, 71)`;
      }),
      tap(console.log)
    );
  }
}
