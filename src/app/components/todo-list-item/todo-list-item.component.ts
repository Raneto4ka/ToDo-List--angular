import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../task';

@Component({
    selector: 'app-todo-list-item',
    templateUrl: './todo-list-item.component.html',
    styleUrls: ['./todo-list-item.component.css']
})

export class TodoListItemComponent {
    @Input() todo: Task;
    @Input() i: number;

    @Output() toggleComplete: EventEmitter<Number> = new EventEmitter();
    @Output() remove: EventEmitter<Number> = new EventEmitter();

    constructor() {}

    toggleTodoComplete(i: number) {
        this.toggleComplete.emit(i);
    }

    removeTodo(i: number) {
        this.remove.emit(i);
    }
}
