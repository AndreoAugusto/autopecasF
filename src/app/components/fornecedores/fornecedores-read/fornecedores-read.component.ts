import { Component, OnInit } from '@angular/core';
import { Fornecedores } from '../fornecedores.model';
import { FornecedorService } from '../fornecedores.service';

@Component({
  selector: 'app-fornecedores-read',
  templateUrl: './fornecedores-read.component.html',
  styleUrls: ['./fornecedores-read.component.css']
})
export class FornecedoresReadComponent implements OnInit {

  fornecedores!: Fornecedores[]
  displayedColumns = ['id_fornecedor', 'nome_for', 'cnpj_for', 'telefone_for', 'email_for', 'action']

  constructor(private fornecedorService: FornecedorService) { }

  ngOnInit(): void {
    this.fornecedorService.read().subscribe(fornecedores => {
      this.fornecedores = fornecedores
      console.log(fornecedores)
    })
  }

}
