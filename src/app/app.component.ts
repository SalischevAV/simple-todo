import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { UserComponent } from './components/user/user.component';
import { DUMMY_USERS } from '../common/mocks/dummy-user';
import { TasksComponent } from './components/tasks/tasks.component';
import { User } from './components/user/user.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'udemy-course';
  users = DUMMY_USERS;
  selectedUser: User | undefined;

  onSelectUser(user: User) {
    this.selectedUser = user;
  }
}
