import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JsonComponent } from './json/json.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { XmlComponent } from './xml/xml.component';

const routes: Routes = [
  { path: '', redirectTo: 'xml', pathMatch: 'full' },
  { path: 'xml', component: XmlComponent },
  { path: 'json', component: JsonComponent },
  { path: 'produtos', component: ProdutosComponent },
  { path: 'pedidos', component: PedidosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
