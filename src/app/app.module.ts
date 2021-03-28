import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { XmlComponent } from './xml/xml.component';
import { JsonComponent } from './json/json.component';
import { NavComponent } from './nav/nav.component';
import { TitleComponent } from './title/title.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { PedidosComponent } from './pedidos/pedidos.component';

@NgModule({
  declarations: [							
    AppComponent,
      XmlComponent,
      JsonComponent,
      NavComponent,
      TitleComponent,
      ProdutosComponent,
      PedidosComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
