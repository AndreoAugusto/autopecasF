import { Component, OnInit } from '@angular/core';
import { Fornecedores } from '../fornecedores.model';
import { FornecedorService } from '../fornecedores.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-fornecedores-delete',
  templateUrl: './fornecedores-delete.component.html',
  styleUrls: ['./fornecedores-delete.component.css']
})
export class FornecedoresDeleteComponent implements OnInit {

  fornecedor!: Fornecedores;

  constructor(
    private fornecedorService: FornecedorService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id_fornecedor = this.route.snapshot.paramMap.get('id_fornecedor');
    this.fornecedorService.readById(id_fornecedor!).subscribe(fornecedor =>{
      this.fornecedor = fornecedor
    })
  }

  deleteFornecedor(): void{
    this.fornecedorService.delete(this.fornecedor.id_fornecedor!).subscribe(() =>{
      this.fornecedorService.showMessage('Fornecedor excluido com sucesso!');
      this.router.navigate(['/fornecedores']);
    })
  }

  cancel(): void{
    this.router.navigate(['/fornecedores']);
  }

}
