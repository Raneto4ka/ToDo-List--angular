import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms'
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})

export class CreateTaskComponent implements OnInit {
    constructor(
        private taskService: TasksService
    ) {}

    form = new FormGroup({
        task: new FormControl<string>('')
    })

    get task() {
        return this.form.get('task');
    }

    ngOnInit(): void {}

    submit() {
        if (this.form.value.task) {
            this.taskService.createTask({
                task: this.form.value.task as string,
                checked: false
            })
            this.form.reset();
        }
    }
}
