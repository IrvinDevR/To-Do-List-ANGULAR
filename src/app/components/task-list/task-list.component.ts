// task-list.component.ts

import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  @Input() tasks: any[];
  @Output() taskRemoved = new EventEmitter<any>();

  constructor() {
    this.tasks = []
  }

  removeTask(task: any) {
    const index = this.tasks.indexOf(task);
    this.tasks.splice(index, 1);
    // this.taskRemoved.emit(task);
  }
}
