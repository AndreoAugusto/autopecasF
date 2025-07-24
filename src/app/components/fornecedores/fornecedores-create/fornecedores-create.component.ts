import { Component, OnInit } from '@angular/core';
import { Fornecedores } from '../fornecedores.model';
import { FornecedorService } from '../fornecedores.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fornecedores-create',
  templateUrl: './fornecedores-create.component.html',
  styleUrls: ['./fornecedores-create.component.css']
})
export class FornecedoresCreateComponent implements OnInit {

  fornecedor: Fornecedores = {
    nome_for: '',
    cnpj_for:'',
    telefone_for:'',
    email_for:''
  }

  constructor(private fornecedorService: FornecedorService,
    private router: Router) { }

  ngOnInit(): void {

  }

  cnpjFormatado: string = '';

  onCnpjInput(event: any): void {
    let value = event.target.value;
  
    // Remove tudo que não é número
    value = value.replace(/\D/g, '');
  
    // Aplica a máscara passo a passo
    if (value.length > 2) {
      value = value.replace(/^(\d{2})(\d)/, '$1.$2');
    }
    if (value.length > 6) {
      value = value.replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3');
    }
    if (value.length > 10) {
      value = value.replace(/^(\d{2})\.(\d{3})\.(\d{3})(\d)/, '$1.$2.$3/$4');
    }
    if (value.length > 15) {
      value = value.replace(/^(\d{2})\.(\d{3})\.(\d{3})\/(\d{4})(\d)/, '$1.$2.$3/$4-$5');
    }
  
    // Limita ao tamanho máximo (18 com máscara)
    if (value.length > 18) {
      value = value.substring(0, 18);
    }

this.cnpjFormatado = value;

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
 
   createFornecedor(): void {
    if (!this.fornecedor.nome_for || !this.fornecedor.cnpj_for || !this.fornecedor.telefone_for || !this.fornecedor.email_for) {
    alert('Preencha todos os campos obrigatórios(*)');
    return;
  }

  if (this.fornecedor.nome_for.length > 100) {
    this.fornecedorService.showMessage('Nome deve conter 100 caracteres no máximo.');
    return;
  }

  if (this.fornecedor.cnpj_for.length < 18) {
    this.fornecedorService.showMessage('CNPJ inválido. Confira os dados.');
    return;
  }

  if (this.fornecedor.telefone_for.length < 15) {
    this.fornecedorService.showMessage('Número de telefone inválido.');
    return;
  }

  if (this.fornecedor.email_for.length > 100) {
    this.fornecedorService.showMessage('O endereço de e-mail não pode exceder 100 caracteres.');
    return;
  }

    this.fornecedorService.create(this.fornecedor).subscribe(() => {
      this.fornecedorService.showMessage('Fornecedor criado!')
      this.router.navigate(['/fornecedores'])
    })
  }

  cancel(): void {
    this.router.navigate(['/fornecedores'])
  }

}
