import { Component, OnDestroy, OnInit } from '@angular/core';
import { Todo } from 'src/app/todo-model';
import { TodoService } from '../todo.service';
import { Router } from '@angular/router';
import { catchError, mergeMap, Observable, of, Subscription, tap } from 'rxjs';

@Component({
    selector: 'app-todo-list',
    templateUrl: './todo-list.component.html',
    styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
    public todos$: Observable<Todo[]> = this.todoservice.getTodos();
    public searchTerm: string = '';


    constructor(public todoservice: TodoService, private router: Router) {}


    ngOnInit(): void {}

    public navigateCreate() {
        this.router.navigate(['createTodo']);
    }

    public deleteTodo(id: number | undefined): void {
        this.todos$ = this.todoservice.deleteTodo(id).pipe(
            catchError(error => {
                alert(`Error: ${error}`);
                return of([]);
            }),
            tap(() => alert('Successfully deleted')),
            mergeMap(() => this.todoservice.getTodos())
        );
    }

    public filterTodos(): void {
        this.todos$ = this.todoservice.filterByStatus('Pending');
    }

    public searchTodo(): void {
        this.todos$ = this.todoservice.searchTodo(this.searchTerm);
    }


    public navigateToEdit(id: number | undefined): void {
        // edit/1
        this.router.navigate(['edit', id]);
    }
}
