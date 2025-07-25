import { Component, OnInit } from '@angular/core';
import { Funcionarios } from '../funcionarios.model';
import { FuncionarioService } from '../funcionarios.service';

@Component({
  selector: 'app-funcionarios-read',
  templateUrl: './funcionarios-read.component.html',
  styleUrls: ['./funcionarios-read.component.css']
})
export class FuncionariosReadComponent implements OnInit {

  funcionarios!: Funcionarios[];
  funcionariosFiltrados!: Funcionarios[];
  filtro: string = '';
  displayedColumns = ['id_funcionario', 'nome_func', 'cpf_func', 'telefone_func', 'email_func', 'action'];

  constructor(private funcionarioService: FuncionarioService) { }

  ngOnInit(): void {
    this.funcionarioService.read().subscribe(funcionarios => {
      this.funcionarios = funcionarios;
      this.funcionariosFiltrados = funcionarios;
    })
  }

  filtrarfuncionarios(): void {
    const termo = this.filtro.trim().toLowerCase();
    this.funcionariosFiltrados = this.funcionarios.filter(c =>
      c.nome_func.toLowerCase().includes(termo) ||
      c.cpf_func.toLowerCase().includes(termo)
    );
  }

}
