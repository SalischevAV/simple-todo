import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from '../common/mocks/dummy-user';
import { TasksComponent } from './tasks/tasks.component';
import { User } from '../common/types';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'udemy-course';
  users = DUMMY_USERS;
  selectedUser : User| undefined;

  onSelectUser(user: User){
    this.selectedUser = user
  }
}
