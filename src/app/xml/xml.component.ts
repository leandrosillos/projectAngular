import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-xml',
  templateUrl: './xml.component.html',
  styleUrls: ['./xml.component.css']
})
export class XmlComponent implements OnInit {

  public title = "GET XML";

  public xml = [
    { nome:'xml1'},
    { nome:'xml2'},
    { nome:'xml3'},
    { nome:'xml4'},
    { nome:'xml5'},
    { nome:'xml6'},
    { nome:'xml7'},
    { nome:'xml8'},
    { nome:'xml9'},
  ]

  constructor() { }

  ngOnInit() {
  }

}
