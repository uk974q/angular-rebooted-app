import { Injectable } from '@angular/core';
import { dummyTasks } from './dummy-tasks';
import { NewTask } from '../types/Task.model';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  private tasks = dummyTasks
  constructor() {
    const tasks = localStorage.getItem('tasks')
    if(tasks){
      this.tasks = JSON.parse(tasks)
    }
   }

  getUserTasks(userId: string){
    return this.tasks.filter(task => task.userId === userId)
  }

  addTask(userId: string, newTask: NewTask){
    this.tasks.push({
      id:new Date().getTime().toString(),
      userId: userId,
      ...newTask
    })
    this.saveTasks()
  }

  removeTask(taskId: string){
    this.tasks = this.tasks.filter(task => task.id !== taskId)
    this.saveTasks()
  }

  private saveTasks(){
    localStorage.setItem('tasks', JSON.stringify(this.tasks))
  }
}
