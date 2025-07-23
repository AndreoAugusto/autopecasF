import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../produtos.service';
import { Router } from '@angular/router';
import { Produtos } from '../produtos.model';

@Component({
  selector: 'app-produtos-create',
  templateUrl: './produtos-create.component.html',
  styleUrls: ['./produtos-create.component.css']
})
export class ProdutosCreateComponent implements OnInit {

  produto: Produtos = {
    nome_prod: '',
    marca_prod: '',
    qtde_prod: 0,
    preco_prod: 0,
    descricao_prod: ''
  }

  constructor(private produtosService: ProdutosService,
    private router: Router) { }

  ngOnInit(): void {
  }

  createProduto(): void {
    this.produtosService.create(this.produto).subscribe(() => {
      this.produtosService.showMessage('Produto criado!')
      this.router.navigate(['/produtos'])
    })
  }

  cancel(): void {
    this.router.navigate(['/produtos'])
  }
}
