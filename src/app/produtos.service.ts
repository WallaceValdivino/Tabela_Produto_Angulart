import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from './produtos/produtos';

@Injectable({
  providedIn: 'root',
})
export class ProdutosService {

  url = 'http://localhost:3000/products';

  constructor(private http: HttpClient) {}

  getProdutos(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.url);
  }
}
