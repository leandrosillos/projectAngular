import { Component, OnInit } from '@angular/core';
import { Produto } from '../models/Produto';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  public title = "Tabela de produtos";

  public prodSelecionado: Produto | any;

  public produtos = [
    { Codigo: "LAP0001", Nome: "LAPIS HB PARA DESENHO", Quantidade: "200", Valor: "217,45" },
    { Codigo: "CAD002",  Nome: "CADERNO BROCHURA AZUL", Quantidade: "50",  Valor: "318,11" },
    { Codigo: "CAD003",  Nome: "CADERNO BROCHURA ROXO", Quantidade: "60",  Valor: "378,11" },
    { Codigo: "CAD004",  Nome: "CADERNO BROCHURA AMARELHO", Quantidade: "70",  Valor: "338,11" }
  ]

  prodSelect(produto: Produto){
    this.prodSelecionado = produto;
  }
  
  prodClear(){
    this.prodSelecionado = null;
  }

  constructor() { }

  ngOnInit() {
  }

}
