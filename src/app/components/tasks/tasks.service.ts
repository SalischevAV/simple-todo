import { Injectable } from '@angular/core';
import { dummyTasks } from '../../../common/mocks';
import { Task } from '../task/task.model';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private tasks: Task[] = [...dummyTasks];

  constructor() {
    const tasks = localStorage.getItem('tasks');
    if (tasks) {
      this.tasks = JSON.parse(tasks);
    }
  }

  getUsersTasks(userId: string) {
    return this.tasks.filter(task => task.userId === userId);
  }

  addTask(task: Omit<Task, 'id' | 'userId'>, userId: string) {
    this.tasks.push({
      ...task,
      id: new Date().getTime().toString(),
      userId,
    });
    this.saveTasks();
  }

  removeTask(id: string) {
    this.tasks = this.tasks.filter(task => task.id !== id);
    this.saveTasks();
  }

  private saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
