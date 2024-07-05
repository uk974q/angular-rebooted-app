import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { dummyTasks } from './dummy-tasks';
import { AddTaskComponent } from './add-task/add-task.component';
import { NewTask } from '../types/Task.model';
import { TasksService } from './tasks.service';

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
  isAddTask = false
  constructor(private taskService:TasksService){}

  get selectedTasks(){
    return this.taskService.getUserTasks(this.userId)
  }
  addTask(){
    this.isAddTask = true
  }
  onCancelDialog(){
    this.isAddTask = false
  }
}
