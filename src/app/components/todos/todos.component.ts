import { Component, OnInit } from '@angular/core';
import {Todo} from "../../models/Todo"
import {GetTodosService} from "../../services/get-todos.service"

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: any | undefined;

  constructor(private todoService: GetTodosService) {}

  ngOnInit(): void {
    this.todoService.getTodos().subscribe(Todo => {
      this.todos = Todo
    })
  }
}
