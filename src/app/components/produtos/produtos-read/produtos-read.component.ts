import { Component, OnInit } from '@angular/core';
import { Produtos } from '../produtos.model';

@Component({
  selector: 'app-produtos-read',
  templateUrl: './produtos-read.component.html',
  styleUrls: ['./produtos-read.component.css']
})
export class ProdutosReadComponent implements OnInit {

  produtos!: Produtos[]
  displayedColumns = ['id_produto', 'nome_prod', 'marca_prod', 'qtde_prod', 'preco_prod', 'descricao_prod', 'action']

  constructor() { }

  ngOnInit(): void {
    
  }

}
