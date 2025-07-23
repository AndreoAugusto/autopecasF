import { Component, OnInit } from '@angular/core';
import { Clientes } from '../cliente.model';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-cliente-read',
  templateUrl: './cliente-read.component.html',
  styleUrls: ['./cliente-read.component.css']
})
export class ClienteReadComponent implements OnInit {

  clientes!: Clientes[]
  displayedColumns = ['id_cliente', 'nome_cli', 'cpf_cli', 'telefone_cli','email_cli', 'action']

  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.clienteService.read().subscribe(clientes => {
      this.clientes = clientes
      console.log(clientes)  
    })
  }

}
