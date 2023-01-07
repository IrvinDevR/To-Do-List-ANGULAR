// add-task.component.ts

import { Component, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
  @ViewChild('tarea') input!: ElementRef;
  title: string = ""
  description: string = ""

  @Output() taskAdded = new EventEmitter<any>();

  addTask() {
    const task = {
      title: this.title,
      description: this.description
    };
    this.taskAdded.emit(task);
    this.title = ""
    this.description = ""
    this.input.nativeElement.focus();
  }
}
