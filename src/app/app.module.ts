import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { CreateTaskComponent } from './components/create-task/create-task.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { FocusDirective } from './directives/focus.directive';
import { TodoListItemComponent } from './components/todo-list-item/todo-list-item.component';

@NgModule({
    declarations: [
        AppComponent,
        CreateTaskComponent,
        TodoListComponent,
        FocusDirective,
        TodoListItemComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
