import { Component, computed, EventEmitter, input, Output} from '@angular/core';
import { User } from '../../common/mocks/dummy-user';

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  user = input.required<User | undefined>()
  imagePath = computed(() => `assets/users/${this.user()?.avatar}`)

  @Output() select = new EventEmitter<User>();
  
  onSelectUser(){
    this.select.emit(this.user());
    // console.log(this.user())
  }
}
