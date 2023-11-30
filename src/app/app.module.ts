import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TodoListComponent } from './todo-list/todo-list.component';
import { CreateTodoComponent } from './create-todo/create-todo.component';
import { HttpClientModule } from '@angular/common/http';
import { TodoStartComponent } from './todo-start/todo-start.component';
import { EditTodoComponent } from './edit-todo/edit-todo.component';
import { ToastrModule } from 'ngx-toastr';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoItemTestComponent } from './todo-item-test/todo-item-test.component';


@NgModule({
  declarations: [
    AppComponent,
    CreateTodoComponent,
    TodoListComponent,
    TodoStartComponent,
    EditTodoComponent,
    TodoItemComponent,
    TodoItemTestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ToastrModule.forRoot()


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
