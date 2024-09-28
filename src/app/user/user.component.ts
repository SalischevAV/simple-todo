import { Component, computed, Input, signal } from '@angular/core';
import { User } from '../../common/mocks/dummy-user';

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({
    required: true
  }) user: User | undefined;
  
  get imagePath(){
    return `assets/users/${this.user?.avatar}`
  }
  
  onSelectUser(){}
}
