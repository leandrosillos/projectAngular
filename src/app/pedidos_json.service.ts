import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Pedido } from './models/Pedido';

@Injectable({
  providedIn: 'root',
})

export class Pedidos_jsonService {
  
  // private readonly url = `${environment}posts`;
  private readonly url = "http://localhost:3000/posts";
  
  constructor(private http: HttpClient) {}

  list(){
    return this.http.get(this.url)
  }

  create(pedido: any){
    return this.http.post(this.url, pedido).pipe(take(1));
  }

}

function take(arg0: number): any {
  throw new Error('Function not implemented.');
}

