import { Component, computed, signal } from '@angular/core';
import { DUMMY_USERS, User } from '../dummy-user';

const generateRandomIndex = () => Math.floor(Math.random() * DUMMY_USERS.length)

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  selectedUser = signal(DUMMY_USERS[generateRandomIndex()])
  imagePath = computed(() => `assets/users/${this.selectedUser().avatar}`)
  
  onSelectUser(){
    let randomUser = DUMMY_USERS[generateRandomIndex()]
    this.selectedUser.set(randomUser)
  }
}
