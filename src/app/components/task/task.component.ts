import { Component, Input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Task } from './task.model';
import { CardComponent } from '../shared/card/card.component';
import { TasksService } from '../tasks/tasks.service';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input({ required: true }) task: Task | undefined;

  constructor(private readonly taskService: TasksService) {}

  onCompleteTask() {
    if (!this.task) {
      return;
    }
    this.taskService.removeTask(this.task?.id);
  }
}
