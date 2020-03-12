import { Component, OnInit } from '@angular/core';
import { Item } from "../../models/Item";
@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  public novoTexto: string = "";

  public lista: Item[] = [];

  constructor() { }

  addItem() {
    if (this.novoTexto != "") {
      this.lista.push(new Item(this.novoTexto));
      this.novoTexto = "";
    }
  }


  ngOnInit(): void {
  }

}
