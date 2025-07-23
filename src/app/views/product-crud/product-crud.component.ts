import { Component, OnInit } from '@angular/core';
//importação do route para navagação a tela de produtos
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-crud',
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.css']
})

export class ProductCrudComponent implements OnInit {

  //construtor para configurar botao para tela de produto
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  //criando interação com botoes
  navigateToProductCreate(): void{
    this.router.navigate(['/produtos/create'])
  }

}
