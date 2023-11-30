import { Component, Input, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { combineLatest } from 'rxjs';
import { Todo } from '../todo-model';

@Component({
    selector: 'app-todo-item-test',
    templateUrl: './todo-item-test.component.html',
    styleUrls: ['./todo-item-test.component.css'],
})
export class TodoItemTestComponent implements OnChanges, OnDestroy {
    @Input() todo?: Todo;

    ngOnChanges(changes: SimpleChanges): void {
        console.log(changes);
    }
    ngOnDestroy(): void {
        console.log('destroyed');
    }
}
