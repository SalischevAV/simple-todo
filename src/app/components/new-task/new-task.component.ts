import { Component, EventEmitter, inject, Input, Output, signal } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { Task } from '../task/task.model';
import { TasksService } from '../tasks/tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Input({required: true}) userId: string | undefined
  @Output() isCreateTaskDialogOpen = new EventEmitter<boolean>();
  // @Output() addTask = new EventEmitter<Omit<Task, 'id' | 'userId'>>()

  // titleValue = '';
  titleValue = signal('')
  summaryValue = '';
  dateValue = '';

  private taskService = inject(TasksService)

  onCloseCreateDialog(){
    this.isCreateTaskDialogOpen.emit(false)
  }
  onCreate(){
    this.userId && this.taskService.addTask({
      title: this.titleValue().toString(),
      summary: this.summaryValue,
      dueDate: this.dateValue
    }, this.userId)
    this.isCreateTaskDialogOpen.emit(false)
  }
}
