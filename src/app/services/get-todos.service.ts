import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http"
import {Observable} from "rxjs"

import {Todo} from "../models/Todo"


@Injectable({
  providedIn: 'root'
})
export class GetTodosService {
  todosUrl:string = "https://jsonplaceholder.typicode.com/todos";
  httpOptions:object = {
    Headers: new HttpHeaders({
      "Content-type": "application/json"
    })
  }
  constructor(private http:HttpClient) {}

  // retieves the todos list from the todo API
  getTodos():Observable<Todo[]> {
    return this.http.get<Todo[]>(this.todosUrl)
  }

  // puts data to the list after it is changed
  toggleCompleted(todo: Todo):Observable<any> {
    const url:string = `${this.todosUrl}/${todo.id}` 
    return this.http.put(url, todo, this.httpOptions)
  }
}
