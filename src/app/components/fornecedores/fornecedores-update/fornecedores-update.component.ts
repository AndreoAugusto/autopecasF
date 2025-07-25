import { Component, OnInit } from '@angular/core';
import { Fornecedores } from '../fornecedores.model';
import { FornecedorService } from '../fornecedores.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-fornecedores-update',
  templateUrl: './fornecedores-update.component.html',
  styleUrls: ['./fornecedores-update.component.css']
})
export class FornecedoresUpdateComponent implements OnInit {

  fornecedor!: Fornecedores;

  constructor(private fornecedorService: FornecedorService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id_fornecedor = this.route.snapshot.paramMap.get('id_fornecedor')
    this.fornecedorService.readById(id_fornecedor!).subscribe((fornecedor: Fornecedores) =>{
      this.fornecedor = fornecedor
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

  updateFornecedor(): void {
    
    if (!this.fornecedor.nome_for || !this.fornecedor.cnpj_for || !this.fornecedor.telefone_for || !this.fornecedor.email_for) {
    alert('Preencha todos os campos obrigatórios(*)');
    return;
  }

  if (this.fornecedor.nome_for.length > 100) {
    this.fornecedorService.showMessage('Nome deve conter 100 caracteres no máximo.');
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

    this.fornecedorService.update(this.fornecedor).subscribe(() => {
      this.fornecedorService.showMessage('Fornecedor atualizado com sucesso!')
      this.router.navigate(['/fornecedores'])
    })
  }

  cancel(): void {
    this.router.navigate(['/fornecedores'])
  }
}
