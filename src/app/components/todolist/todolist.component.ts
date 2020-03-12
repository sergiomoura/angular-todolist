import { Component, OnInit } from '@angular/core';
import { Item } from "../../models/Item";
@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  lista: Item[] = [
    new Item("Teste 1..."),
    new Item("Teste 2...")
  ];

  constructor() { }


  ngOnInit(): void {
  }

}
