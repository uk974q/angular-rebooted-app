import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../types/User.model';
import { CardComponent } from '../shared/card/card.component';


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({required: true}) isSelected!: boolean;
  @Input({required: true}) user!:User
  @Output() select = new EventEmitter<string>()

  get imagePath(){
    return 'assets/users/' + this.user.avatar
  }

  selectUser(id:string){
    this.select.emit(id)
  }
  
}
