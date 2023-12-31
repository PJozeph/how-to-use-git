import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from '../todo-model';
import { TodoService } from '../todo.service';

@Component({
    selector: 'app-edit-todo',
    templateUrl: './edit-todo.component.html',
    styleUrls: ['./edit-todo.component.css'],
})
export class EditTodoComponent implements OnInit {
    todo?: Todo;

    priorityOptions: string[] = ['High', 'Medium', 'Low'];
    statusOptions: string[] = ['Pending', 'In Progress', 'Completed'];

    todoEditFormGroup: FormGroup = this.formBuilder.group({
        id: [''],
        title: [''],
        description: [''],
        dueDate: [Date],
        priority: [''],
        status: [''],
        notes: ['']
    });

    constructor(
        private activatedRoute: ActivatedRoute,
        private todoService: TodoService,
        private formBuilder: FormBuilder,
        private router: Router
    ) { }

    ngOnInit(): void {
        this.activatedRoute.params.subscribe(params => {
            this.todoService.getTodoById(params['id']).subscribe((response: Todo) => {
                this.todo = response;
                this.todoEditFormGroup.patchValue(this.todo);
            });
        });
    }

    public updateTodo() {
        const todo: Todo = this.todoEditFormGroup.getRawValue();
        this.todoService.updateTodo(todo).subscribe(() => {
            this.router.navigate(['todoList']);
        });
    }
}
