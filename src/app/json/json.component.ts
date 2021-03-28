import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-json',
  templateUrl: './json.component.html',
  styleUrls: ['./json.component.css']
})
export class JsonComponent implements OnInit {

  public title = "SET JSON";

  public json = [
  { nome: "json1" },
  { nome: "json2" },
  { nome: "json3" },
  { nome: "json4" },
  { nome: "json5" },
  { nome: "json6" },
  { nome: "json7" },
  { nome: "json8" },
  { nome: "json9" },
  ]

  constructor() { }

  ngOnInit() {
  }

}
