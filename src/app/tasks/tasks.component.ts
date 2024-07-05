import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { dummyTasks } from './dummy-tasks';
import { AddTaskComponent } from './add-task/add-task.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, AddTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required:true}) userId!:string;
  @Input({required:true}) name:string | undefined;
  tasks = dummyTasks
  isAddTask = false

  get selectedTasks(){
    return this.tasks.filter(task => task.userId === this.userId)
  }
  onTaskComplete(id:string){
    this.tasks = this.tasks.filter(task => task.id !== id)
  }

  addTask(){
    this.isAddTask = true
  }
  onCancelDialog(){
    this.isAddTask = false
  }
}
