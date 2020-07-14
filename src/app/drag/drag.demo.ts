import {
  Component,
  OnInit,
  QueryList,
  ViewChildren,
  AfterViewInit
} from '@angular/core';
import { SohoDragDirective } from 'ids-enterprise-ng';

@Component({
  selector: 'app-drag-demo',
  templateUrl: 'drag.demo.html',
})
export class DragDemoComponent implements AfterViewInit {

  @ViewChildren(SohoDragDirective) drags: QueryList<SohoDragDirective>;

  dragOption0 = {};

  constructor() { }

  ngAfterViewInit() {
    console.log('here are the viewChildren', this.drags);
  }

  onDragStart(e: SohoDragEvent) {
    console.log('Drag Started!: ', e);
  }

  onDragging(e: SohoDragEvent) {
    console.log('Dragging...: ', e);
  }

  onDragEnd(e: SohoDragEvent) {
    console.log('Drag Ended!: ', e);
  }

}
