// task.component.ts

import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  @Input() task: any;
  @Output() taskRemoved = new EventEmitter<any>();

  removeTask() {
    this.taskRemoved.emit(this.task);
  }
}
