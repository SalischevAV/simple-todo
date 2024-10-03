import { Component, Input } from '@angular/core';
import { TaskComponent } from "../task/task.component";
import { User } from '../user/user.model';
import { Task } from '../task/task.model';
import { NewTaskComponent } from "../new-task/new-task.component";
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required: true}) user: User | undefined;
  @Input() isCreateTaskDialogOpen: boolean | undefined = false

  constructor(private readonly taskService: TasksService){}
  

  get usersTasks(){
    return this.user && this.taskService.getUsersTasks(this.user.id)
  }

  // onCompleteTask(id: string){
  //   this.taskService.removeTask(id)
  // }

  onOpenCloseCreateDialog(value: boolean){
    this.isCreateTaskDialogOpen = value;
  }
}
