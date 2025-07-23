import { Component, OnInit } from '@angular/core';
import { Clientes } from '../cliente.model';
import { ClienteService } from '../cliente.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cliente-delete',
  templateUrl: './cliente-delete.component.html',
  styleUrls: ['./cliente-delete.component.css']
})
export class ClienteDeleteComponent implements OnInit {

  cliente!: Clientes;

  constructor(
    private clienteService: ClienteService, 
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id_cliente = this.route.snapshot.paramMap.get('id_cliente');
    this.clienteService.readById(id_cliente!).subscribe(cliente =>{
      this.cliente = cliente
    })
  }

  deleteCliente(): void {
    this.clienteService.delete(this.cliente.id_cliente!).subscribe(() =>{
    this.clienteService.showMessage('Cliente excluido com sucesso!')  
    this.router.navigate(['/clientes'])
    })
  }

  cancel(): void{
    this.router.navigate(['/clientes'])
  }

}
