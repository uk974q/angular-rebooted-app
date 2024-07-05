import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTask } from '../../types/Task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {
  @Input({required: true}) userId!:string
  @Output() closeDialog = new EventEmitter<void>()
  // @Output() add = new EventEmitter<NewTask>()
  enteredTitle:string = ''
  enteredSummary: string = ''
  enteredDueDate: string = ''
  private tasksService = inject(TasksService)
  onCancelDialog(){
    this.closeDialog.emit()
  }
  onSubmit(){
    this.tasksService.addTask(this.userId, {
      title: this.enteredTitle,
      summary: this.enteredSummary,
      dueDate: this.enteredDueDate
    })
    this.closeDialog.emit()
  }
}
