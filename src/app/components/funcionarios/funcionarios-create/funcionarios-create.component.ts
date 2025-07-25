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

  cpfFormatado: string = '';
onCpfInput(event: any): void {
  let valor = event.target.value;

  // Remove tudo que não for número
  valor = valor.replace(/\D/g, '');

  // Limita a 11 números (CPF)
  if (valor.length > 11) {
    valor = valor.substring(0, 11);
  }

  // Formata colocando pontos e traço
  if (valor.length > 9) {
    valor = valor.replace(/^(\d{3})(\d{3})(\d{3})(\d{1,2})$/, '$1.$2.$3-$4');
  } else if (valor.length > 6) {
    valor = valor.replace(/^(\d{3})(\d{3})(\d{1,3})$/, '$1.$2.$3');
  } else if (valor.length > 3) {
    valor = valor.replace(/^(\d{3})(\d{1,3})$/, '$1.$2');
  }
this.cpfFormatado = valor;
}

telefoneFormatado: string = '';
onTelefoneInput(event: any): void {
  let valor = event.target.value;

  // Remove tudo que não for número
  valor = valor.replace(/\D/g, '');

  // Limita a 11 dígitos
  if (valor.length > 11) {
    valor = valor.substring(0, 11);
  }

  // Formata com parênteses, espaço e hífen
  if (valor.length > 6) {
    // celular com 9 dígitos
    valor = valor.replace(/^(\d{2})(\d{5})(\d{0,4}).*/, '($1) $2-$3');
  } else if (valor.length > 2) {
    // fixo ou celular com menos dígitos ainda
    valor = valor.replace(/^(\d{2})(\d{0,5})/, '($1) $2');
  } else {
    // apenas DDD
    valor = valor.replace(/^(\d{0,2})/, '($1');
  }

  this.telefoneFormatado = valor;
}


  createFuncionario(): void {
    if (!this.funcionario.nome_func || !this.funcionario.cpf_func || !this.funcionario.telefone_func || !this.funcionario.email_func) {
      alert('Preencha todos os campos obrigatórios(*)');
      return;
    }
  
    if (this.funcionario.nome_func.length > 50) {
      this.funcionariosService.showMessage('Total de letras permitidas no nome: 100');
      return;
    }
  
    if (this.funcionario.cpf_func.length < 14) {
      this.funcionariosService.showMessage('CPF inválido. Confira os dados.');
      return;
    } 
  
    if (this.funcionario.telefone_func.length < 15) {
      this.funcionariosService.showMessage('Número de telefone inválido.');
      return;
    }
  
    if (this.funcionario.email_func.length > 100) {
      this.funcionariosService.showMessage('O endereço de e-mail não pode exceder 100 caracteres.');
      return;
    }

    this.funcionariosService.create(this.funcionario).subscribe(() => {
      this.funcionariosService.showMessage('Funcionário criado!')
      this.router.navigate(['/funcionarios'])
    })
  }

  cancel(): void {
    this.router.navigate(['/funcionarios'])
  }

}
