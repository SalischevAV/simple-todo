import { Component, computed, EventEmitter, input, Output} from '@angular/core';
import { User } from './user.model';


@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  user = input.required<User | undefined>()
  selected = input.required<boolean>()
  imagePath = computed(() => `assets/users/${this.user()?.avatar}`)

  @Output() select = new EventEmitter<User>();
  
  onSelectUser(){
    this.select.emit(this.user());
  }
}
