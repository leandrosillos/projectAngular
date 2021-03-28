import { Component, OnInit } from '@angular/core';
import { ProdutosComponent } from '../produtos/produtos.component';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {

  public title = "Consulta de Pedidos!";

  public pedidos = [
    {

      Cliente: "ARMAZEM DO ENSINO",
      Pedido: "548397",
      Data: "30/01/2021",
      Total: "639,31",

      Produtos: [

        {
          Produto: [
            {
              Codigo: "LAP0001",
              Nome: "LAPIS HB PARA DESNHO",
              Quantidade: "200",
              Valor: "217,45"
            },
          ]
        },

        {
          Produto: [
            {
              Codigo: "CAD002",
              Nome: "CADERNO BROCHURA AZUL",
              Quantidade: "50",
              Valor: "318,11"
            },
          ]
        },

        {
          Produto: [
            {
              Codigo: "REG010",
              Nome: "REGUA DE FERRO",
              Quantidade: "80",
              Valor: "103,75"
            },
          ]
        }
        
      ]

    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
