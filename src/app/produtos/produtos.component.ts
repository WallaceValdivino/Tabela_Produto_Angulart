import { ProdutosService } from './../produtos.service';
import { Produto } from '../produtos/produtos';
import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css'],
})
export class ProdutosComponent implements OnInit {
  produtos: Produto[] = [];

  constructor(private produtosService: ProdutosService) {}
  ngOnInit(): void {
    this.loadProduts();
  }
  loadProduts() {
    this.produtosService.getProdutos().subscribe({
      next: (data) => (this.produtos = data),
    });
  }
}
