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

  updateFornecedor(): void {
    this.fornecedorService.update(this.fornecedor).subscribe(() => {
      this.fornecedorService.showMessage('Fornecedor atualizado com sucesso!')
      this.router.navigate(['/fornecedores'])
    })
  }

  cancel(): void {
    this.router.navigate(['/fornecedores'])
  }
}
