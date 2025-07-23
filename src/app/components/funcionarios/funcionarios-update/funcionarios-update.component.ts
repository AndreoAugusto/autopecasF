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

  updateFuncionario(): void {
    this.funcionarioService.update(this.funcionario).subscribe(() => {
      this.funcionarioService.showMessage('Funcionário atualizado com sucesso!')
      this.router.navigate(['/funcionarios'])
    })
  } 

  cancel(): void {
    this.router.navigate(['/funcionarios'])
  }

}
