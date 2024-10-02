import { Component, Input } from '@angular/core';
import { TaskComponent } from "../task/task.component";
import { dummyTasks } from '../../common/mocks';
import { User } from '../user/user.model';
import { Task } from '../task/task.model';
import { NewTaskComponent } from "../new-task/new-task.component";

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

  tasks: Task[] = [...dummyTasks]

  get usersTasks(){
    return this.tasks.filter(task => task.userId === this.user?.id)
  }

  onCompleteTask(id: string){
    this.tasks = this.tasks.filter(task => task.id !== id)
  }

  onOpenCloseCreateDialog(value: boolean){
    this.isCreateTaskDialogOpen = value;
  }

  onAddTask(task: Omit<Task, 'id' | 'userId'>){
    this.tasks.push({
      ...task,
      id: new Date().getTime().toString(),
      userId: this.user?.id
    })
    this.isCreateTaskDialogOpen = false;
  }
}
