import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Pedido } from '../models/Pedido';
import { Produto } from '../models/Produto';
import { Pedidos_jsonService } from '../pedidos_json.service';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css'],
})
export class PedidosComponent implements OnInit {
  public title = 'Consulta de Pedidos!';
  public pathImage = '../../assets/image/';
  public pedidosForm: FormGroup | any;
  public pedidoSelecionado: Pedido | any;
  public emissor = '';

  public pedidosJson: object | any;

  // DADOS QUE DEVERIA SER RECEBIDOS DO XML
  public pedidos = [
    {
      Cliente: 'ARMAZEM DO ENSINO',
      Pedido: '548397',
      Data: '30/01/2021',
      Total: '639,31',
      Produtos: [
        {
          Produto: [
            {
              Codigo: 'LAP0001',
              Nome: 'LAPIS HB PARA DESNHO',
              Quantidade: '200',
              Valor: '217,45',
            },
          ],
        },
        {
          Produto: [
            {
              Codigo: 'CAD002',
              Nome: 'CADERNO BROCHURA AZUL',
              Quantidade: '50',
              Valor: '318,11',
            },
          ],
        },
        {
          Produto: [
            {
              Codigo: 'REG010',
              Nome: 'REGUA DE FERRO MÉDIA',
              Quantidade: '80',
              Valor: '103,75',
            },
          ],
        },
      ],
    },

    {
      Cliente: 'PAPELARIA ALEGRIA',
      Pedido: '46543',
      Data: '30/03/2021',
      Total: '339,31',
      Produtos: [
        {
          Produto: [
            {
              Codigo: 'PROD564',
              Nome: 'Caneta',
              Quantidade: '200',
              Valor: '217,45',
            },
          ],
        },
        {
          Produto: [
            {
              Codigo: 'PROD5685',
              Nome: 'LápisL',
              Quantidade: '50',
              Valor: '318,11',
            },
          ],
        },
        {
          Produto: [
            {
              Codigo: 'PROD56458',
              Nome: 'Lápis',
              Quantidade: '80',
              Valor: '103,75',
            },
          ],
        },
        {
          Produto: [
            {
              Codigo: 'PROD548',
              Nome: 'Estojo',
              Quantidade: '80',
              Valor: '103,75',
            },
          ],
        },
      ],
    },

    {
      Cliente: 'PAPELARIA CASTELAR',
      Pedido: '5646',
      Data: '30/12/2019',
      Total: '789,31',
      Produtos: [
        {
          Produto: [
            {
              Nome: 'Caderno',
              Codigo: 'PROD5487',
              Quantidade: '200',
              Valor: '217,45',
            },
          ],
        },
        {
          Produto: [
            {
              Nome: 'Estojo',
              Codigo: 'PROD654',
              Quantidade: '50',
              Valor: '318,11',
            },
          ],
        },
        {
          Produto: [
            {
              Nome: 'Caneta',
              Codigo: 'PROD4563',
              Quantidade: '80',
              Valor: '103,75',
            },
          ],
        },
        {
          Produto: [
            {
              Nome: 'Lápis',
              Codigo: 'PROD28',
              Quantidade: '80',
              Valor: '103,75',
            },
          ],
        },
        {
          Produto: [
            {
              Nome: 'cola',
              Codigo: 'PROD528',
              Quantidade: '80',
              Valor: '103,75',
            },
          ],
        },
        {
          Produto: [
            {
              Nome: 'Tesoura',
              Codigo: 'PROD45638',
              Quantidade: '80',
              Valor: '103,75',
            },
          ],
        },
      ],
    },
  ];

  qntdItens = this.pedidos.length;

  constructor(private fb: FormBuilder, private service: Pedidos_jsonService) {
    this.createForm();
  }

  ngOnInit() {
    this.service
      .list()
      .subscribe(console.log);
    //   .subscribe((dados) => (this.pedidosJson = dados));
    // console.log(this.pedidosJson);
  }

  createForm() {
    this.pedidosForm = this.fb.group({
      Codigo: ['', [Validators.required, Validators.maxLength(8)]],
      Nome: ['', [Validators.required, Validators.maxLength(100)]],
      Quantidade: ['', [Validators.required, Validators.maxLength(8)]],
      Valor: ['', [Validators.required]],
    });
  }

  //GERAR JSON
  saveJson(){

    console.log(JSON.stringify(this.pedidos));

    this.service.create(this.pedidos).subscribe(
      (success) => console.log('sucesso'),
      (error) => console.error(error),
      () => console.log('Completo!')
    );
  }

  // SUBMIT DO FORM DE INSERÇÃO
  insertItem() {
    var pedidoExiste = false;

    for (var i = 0; i < this.pedidos[this.cont].Produtos.length; i++) {
      var obj = this.pedidos[this.cont].Produtos[i].Produto;
      if (this.pedidosForm.value.Codigo == obj[0].Codigo) {
        var obj = this.pedidos[this.cont].Produtos[i].Produto;

        var objNome = this.pedidosForm.value.Nome;
        var objQuantidade = this.pedidosForm.value.Quantidade;
        var objValor = this.pedidosForm.value.Valor;

        obj.forEach((item) => {
          item.Nome = objNome;
          item.Quantidade = objQuantidade;
          item.Valor = objValor;
        });

        pedidoExiste = true;
      }
    }

    // CRIA NOVO REGISTRO CASO PEDIDO NÃO EXISTA
    if (!pedidoExiste) {
      this.pedidos[this.cont].Produtos.push({
        Produto: [
          {
            Codigo: this.pedidosForm.value.Codigo,
            Nome: this.pedidosForm.value.Nome,
            Quantidade: this.pedidosForm.value.Quantidade,
            Valor: this.pedidosForm.value.Valor,
          },
        ],
      });
    }
  }

  // CONTADOR UTILIZADO NA PAGINAÇÃO DOS REGISTROS
  public cont = 0;

  // EXIBE PRÓXIMO ITEM DA LISTA
  nextItem() {
    if (this.cont < this.qntdItens - 1) {
      this.cont++;
    } else {
      this.cont = 0;
    }
  }

  // EXIBE ITEM ANTERIOR DA LISTA
  prevItem() {
    if (this.cont == 0) {
      this.cont = this.qntdItens - 1;
    } else {
      this.cont--;
    }
  }

  // CARREGA DADOS DO PRODUTO PARA EDIÇÃO
  updateItem(produto: Produto) {
    this.pedidosForm.patchValue(produto);
  }

  // LIMPA DADOS DO FORM
  cleanItem() {
    this.pedidosForm.reset();
  }
}
