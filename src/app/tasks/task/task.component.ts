import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Task } from '../../types/Task.model';
import { CardComponent } from "../../shared/card/card.component";
import { DatePipe } from '@angular/common';
import { TasksService } from '../tasks.service';

@Component({
    selector: 'app-task',
    standalone: true,
    templateUrl: './task.component.html',
    styleUrl: './task.component.css',
    imports: [CardComponent, DatePipe]
})
export class TaskComponent {
  @Input({required:true}) task!:Task
  private tasksService = inject(TasksService)
  onTaskComplete(){
    this.tasksService.removeTask(this.task.id)
  }
}
