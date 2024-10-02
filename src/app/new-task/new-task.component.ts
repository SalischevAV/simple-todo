import { Component, EventEmitter, Output, signal } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { Task } from '../task/task.model';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Output() isCreateTaskDialogOpen = new EventEmitter<boolean>();
  @Output() addTask = new EventEmitter<Omit<Task, 'id' | 'userId'>>()

  // titleValue = '';
  titleValue = signal('')
  summaryValue = '';
  dateValue = '';

  onCloseCreateDialog(){
    this.isCreateTaskDialogOpen.emit(false)
  }
  onSubmit(){
    this.addTask.emit({
      title: this.titleValue().toString(),
      summary: this.summaryValue,
      dueDate: this.dateValue
    })
  }
}
