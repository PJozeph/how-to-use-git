import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { TodoService } from '../todo.service';
import { Todo } from '../todo-model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnChanges {
  @Input() todo: Todo | any;

  constructor(private todoService: TodoService) { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
}
