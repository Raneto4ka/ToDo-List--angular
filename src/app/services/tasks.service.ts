import { Injectable } from '@angular/core';
import { Task } from '../task';
import { LocalService } from './local.service'

@Injectable({
    providedIn: 'root'
})

export class TasksService {
    constructor(
        private localService: LocalService
    ) { }

    tasks: Task[] = JSON.parse( this.getTasks())

    createTask(task: Task) {
        this.tasks.push(task);
        this.localService.saveData('tasks', JSON.stringify(this.tasks))
    }

    getTasks(): string {
        return this.localService.getData('tasks') || '[]';
    }

    updateTasks(i: number): Task[] {
        this.tasks.forEach((task, index) => {
            if (index === i) {
                this.tasks[i] = {
                    ...this.tasks[i],
                    checked: !task.checked
                }
            }
        })

        this.localService.saveData('tasks', JSON.stringify(this.tasks))

        return this.tasks;
    }


    deleteTasks(i: number): Task[] {
        this.tasks.forEach((task, index, array) => {
            if (index === i) {
                array.splice(i, 1);
            }
        })

        this.localService.saveData('tasks', JSON.stringify(this.tasks))

        return this.tasks;
    }
}
