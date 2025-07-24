import { Component, OnInit } from '@angular/core';
import { Clientes } from '../cliente.model';
import { ClienteService } from '../cliente.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cliente-update',
  templateUrl: './cliente-update.component.html',
  styleUrls: ['./cliente-update.component.css']
})
export class ClienteUpdateComponent implements OnInit {

  cliente!: Clientes;

  constructor(private clienteService: ClienteService, 
    private router: Router, 
    private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id_cliente = this.route.snapshot.paramMap.get('id_cliente')
    this.clienteService.readById(id_cliente!).subscribe((cliente: Clientes) =>{
      this.cliente = cliente
    })
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

  updateCliente(): void {
    if (!this.cliente.nome_cli || !this.cliente.cpf_cli || !this.cliente.telefone_cli || !this.cliente.email_cli) {
      alert('Preencha todos os campos obrigatórios(*)');
      return;
    }
  
    if (this.cliente.nome_cli.length > 50) {
      this.clienteService.showMessage('Total de letras permitidas no nome: 100');
      return;
    }
  
    if (this.cliente.telefone_cli.length < 15) {
      this.clienteService.showMessage('Número de telefone inválido.');
      return;
    }
  
    if (this.cliente.email_cli.length > 100) {
      this.clienteService.showMessage('Email deve conter 100 caracteres no máximo.');
      return;
    }

    this.clienteService.update(this.cliente).subscribe(() => {
      this.clienteService.showMessage('Cliente atualizado com sucesso!')
      this.router.navigate(['/clientes'])
    })
  }

  cancel(): void {
    this.router.navigate(['/clientes'])
  }
}
