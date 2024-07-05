import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {
  @Output() closeDialog = new EventEmitter<void>()
  enteredTitle:string = ''
  enteredSummary: string = ''
  enteredDueDate: string = ''
  onCancelDialog(){
    this.closeDialog.emit()
  }
}
