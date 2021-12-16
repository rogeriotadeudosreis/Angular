import { Produto } from './../produto';
import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-lista-produto',
  templateUrl: './lista-produto.component.html',
  styles: [
  ]
})
export class ListaProdutoComponent implements OnInit {

  constructor(private produtoService: ProdutoService) {
    this.produtos = [];
  }

  public produtos: Produto[];

  ngOnInit(): void {
    this.produtoService.getProdutos()
      .subscribe(
        produtos => {
          this.produtos = produtos;
          console.log(produtos);
        },
        error => console.log(error)
      )
  }
}
