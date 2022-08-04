import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public TODO_ITEMS:string[] = [];
  constructor() { }

  ngOnInit(): void {}
  public addtodos(txt:string)
  {
    this.TODO_ITEMS.push(txt);

  }
  public removetodo(a:any)
  {
    this.TODO_ITEMS.splice(this.TODO_ITEMS.indexOf(a), 1)
    console.log(this.TODO_ITEMS.indexOf(a))
  }
}
