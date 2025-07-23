import { Component, OnInit } from '@angular/core';
import { Funcionarios } from '../funcionarios.model';
import { FuncionarioService } from '../funcionarios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-funcionarios-create',
  templateUrl: './funcionarios-create.component.html',
  styleUrls: ['./funcionarios-create.component.css']
})
export class FuncionariosCreateComponent implements OnInit {

  funcionario: Funcionarios = {
    nome_func: '',
    cpf_func: '',
    telefone_func: '',
    email_func: ''
  }

  constructor(private funcionariosService: FuncionarioService,
    private router: Router) { }

  ngOnInit(): void {
  }

  createFuncionario(): void {
    this.funcionariosService.create(this.funcionario).subscribe(() => {
      this.funcionariosService.showMessage('Funcionário criado!')
      this.router.navigate(['/funcionarios'])
    })
  }

  cancel(): void {
    this.router.navigate(['/funcionarios'])
  }

}
