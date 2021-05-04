import { Component, OnInit, Input } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import { GetTodosService } from "../../services/get-todos.service"

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: string | undefined;

  constructor(private todoService:GetTodosService) { }

  ngOnInit(): void {
  }

  onToggle(todo: any) {
    todo.completed = !todo.completed
    this.todoService.toggleCompleted(todo)
  }

  onDelete(todo: any) {
    console.log(todo)
  }

}
