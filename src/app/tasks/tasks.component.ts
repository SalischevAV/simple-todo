import { Component, Input } from '@angular/core';
import { TaskComponent } from "../task/task.component";
import { Task, User } from '../../common/types';
import { dummyTasks } from '../../common/mocks';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required: true}) user: User | undefined;
  tasks: Task[] = dummyTasks

  get usersTasks(){
    return this.tasks.filter(task => task.userId === this.user?.id)
  }
}
