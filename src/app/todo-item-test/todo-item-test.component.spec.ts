import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoItemTestComponent } from './todo-item-test.component';

describe('TodoItemTestComponent', () => {
  let component: TodoItemTestComponent;
  let fixture: ComponentFixture<TodoItemTestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodoItemTestComponent]
    });
    fixture = TestBed.createComponent(TodoItemTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
