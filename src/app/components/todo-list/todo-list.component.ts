import { Component, OnInit, DoCheck } from '@angular/core';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})

export class TodoListComponent implements OnInit, DoCheck {
    loadingTasks = []

    constructor(
        public taskService: TasksService
    ) {}

    ngOnInit(): void {
        this.loadingTasks = JSON.parse( this.taskService.getTasks() )
    }

    ngDoCheck(): void {
        this.loadingTasks = JSON.parse( this.taskService.getTasks() )
    }

    onToggleTodoComplete(i: number) {
        this.taskService.updateTasks(i);
    }

    onRemoveTodo(i: number) {
        this.taskService.deleteTasks(i);
    }
}

