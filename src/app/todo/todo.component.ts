import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor(private myapi:ApiService) { this.putData()}
  putData=()=>{
    this.myapi.getData().subscribe(
      (data)=>{
        this.todoData=data
      }
    )
  }
  todoData:any= []

  ngOnInit(): void {
  }

}
