import { Component, OnInit } from '@angular/core';
import { Funcionarios } from '../funcionarios.model';
import { FuncionarioService } from '../funcionarios.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-funcionarios-delete',
  templateUrl: './funcionarios-delete.component.html',
  styleUrls: ['./funcionarios-delete.component.css']
})
export class FuncionariosDeleteComponent implements OnInit {

  funcionario!: Funcionarios;

  constructor(
    private funcionarioService: FuncionarioService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id_funcionario = this.route.snapshot.paramMap.get('id_funcionario');
    this.funcionarioService.readById(id_funcionario!).subscribe(funcionario =>{
      this.funcionario = funcionario
    })
  }

  deleteFuncionario(): void{
    this.funcionarioService.delete(this.funcionario.id_funcionario!).subscribe(() =>{
      this.funcionarioService.showMessage('Funcionário excluido com sucesso!');
      this.router.navigate(['/funcionarios']);
    })
  }

  cancel(): void{
    this.router.navigate(['/funcionarios']);
  }
}
