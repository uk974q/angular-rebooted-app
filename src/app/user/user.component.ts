import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

interface User  {
  id: string;
  avatar: string, 
  name: string
}
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({required: true}) user!:User
  @Output() select = new EventEmitter<string>()

  get imagePath(){
    return 'assets/users/' + this.user.avatar
  }

  selectUser(id:string){
    this.select.emit(id)
  }
  
}
