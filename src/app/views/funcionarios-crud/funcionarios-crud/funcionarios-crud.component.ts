import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-funcionarios-crud',
  templateUrl: './funcionarios-crud.component.html',
  styleUrls: ['./funcionarios-crud.component.css']
})
export class FuncionariosCrudComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToFuncionariosCreate(): void{
    this.router.navigate(['/funcionarios/create']);
  }
}
