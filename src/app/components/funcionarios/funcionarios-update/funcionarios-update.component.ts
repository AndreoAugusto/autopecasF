import { Component, OnInit } from '@angular/core';
import { Funcionarios } from '../funcionarios.model';
import { FuncionarioService } from '../funcionarios.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-funcionarios-update',
  templateUrl: './funcionarios-update.component.html',
  styleUrls: ['./funcionarios-update.component.css']
})
export class FuncionariosUpdateComponent implements OnInit {

  funcionario!: Funcionarios;

  constructor(private funcionarioService: FuncionarioService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id_funcionario = this.route.snapshot.paramMap.get('id_funcionario')
    this.funcionarioService.readById(id_funcionario!).subscribe((funcionario: Funcionarios) =>{
      this.funcionario = funcionario
    })
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

  updateFuncionario(): void {

    if (!this.funcionario.nome_func || !this.funcionario.cpf_func || !this.funcionario.telefone_func || !this.funcionario.email_func) {
      alert('Preencha todos os campos obrigatórios(*)');
      return;
    }
  
    if (this.funcionario.nome_func.length > 50) {
      this.funcionarioService.showMessage('Total de letras permitidas no nome: 100');
      return;
    }
  
    if (this.funcionario.telefone_func.length < 15) {
      this.funcionarioService.showMessage('Número de telefone inválido.');
      return;
    }
  
    if (this.funcionario.email_func.length > 100) {
      this.funcionarioService.showMessage('O endereço de e-mail não pode exceder 100 caracteres.');
      return;
    }

    this.funcionarioService.update(this.funcionario).subscribe(() => {
      this.funcionarioService.showMessage('Funcionário atualizado com sucesso!')
      this.router.navigate(['/funcionarios'])
    })
  } 

  cancel(): void {
    this.router.navigate(['/funcionarios'])
  }

}
