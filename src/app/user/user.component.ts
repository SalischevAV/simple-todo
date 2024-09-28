import { Component } from '@angular/core';
import { DUMMY_USERS, User } from '../dummy-user';

const generateRandomIndex = () => Math.floor(Math.random() * DUMMY_USERS.length)

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  private _selectedUser: User = DUMMY_USERS[generateRandomIndex()]

  get selectedUser(): User{
    return this._selectedUser
  }

  set selectedUser(user){
    this._selectedUser = user
  }

  get imagePath(){
    return `assets/users/${this._selectedUser.avatar}`;
  }
  
  onSelectUser(){
    let randomUser = DUMMY_USERS[generateRandomIndex()]
    this.selectedUser = randomUser
    console.log(this.selectedUser)
  }
}
