import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './views/home/home.component';
import {ProductCrudComponent} from  './views/product-crud/product-crud.component';
import { ClienteCreateComponent } from './components/cliente/cliente-create/cliente-create.component';
import { ClienteCrudComponent } from './views/cliente-crud/cliente-crud.component';
import { ClienteUpdateComponent } from './components/cliente/cliente-update/cliente-update.component';
import { ClienteDeleteComponent } from './components/cliente/cliente-delete/cliente-delete.component';
import { ProdutosCreateComponent } from './components/produtos/produtos-create/produtos-create.component';
import { ProdutosUpdateComponent } from './components/produtos/produtos-update/produtos-update.component';
import { ProdutosDeleteComponent } from './components/produtos/produtos-delete/produtos-delete.component';
import { FornecedoresCrudComponent } from './views/fornecedores-crud/fornecedores-crud/fornecedores-crud.component';
import { FornecedoresCreateComponent } from './components/fornecedores/fornecedores-create/fornecedores-create.component';
import { FornecedoresUpdateComponent } from './components/fornecedores/fornecedores-update/fornecedores-update.component';
import { FornecedoresDeleteComponent } from './components/fornecedores/fornecedores-delete/fornecedores-delete.component';
import { FuncionariosCrudComponent } from './views/funcionarios-crud/funcionarios-crud/funcionarios-crud.component';
import { FuncionariosCreateComponent } from './components/funcionarios/funcionarios-create/funcionarios-create.component';
import { FuncionariosUpdateComponent } from './components/funcionarios/funcionarios-update/funcionarios-update.component';
import { FuncionariosDeleteComponent } from './components/funcionarios/funcionarios-delete/funcionarios-delete.component';

//configuração para rotear entre as paginas na home
const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "produtos",
    component: ProductCrudComponent
  },
  {
    path: "produtos/create",
    component: ProdutosCreateComponent
  },
  {
    path: "produtos/update/:id_produto",
    component: ProdutosUpdateComponent
  },
  {
    path: "produtos/delete/:id_produto",
    component: ProdutosDeleteComponent
  },
  {
    path: "clientes",
    component: ClienteCrudComponent
  },
  {
    path: "clientes/create",
    component: ClienteCreateComponent
  },
  {
    path: "clientes/update/:id_cliente",
    component: ClienteUpdateComponent
  },
  {
    path: "clientes/delete/:id_cliente",
    component: ClienteDeleteComponent
  },
  {
    path: "fornecedores",
    component: FornecedoresCrudComponent
  },
  {
    path: "fornecedores/create",
    component: FornecedoresCreateComponent
  },
  {
    path: "fornecedores/update/:id_fornecedor",
    component: FornecedoresUpdateComponent
  },
  {
    path: "fornecedores/delete/:id_fornecedor",
    component: FornecedoresDeleteComponent
  },
  {
    path: "funcionarios",
    component: FuncionariosCrudComponent
  },
  {
    path: "funcionarios/create",
    component: FuncionariosCreateComponent
  },
  {
    path: "funcionarios/update/:id_funcionario",
    component: FuncionariosUpdateComponent
  },
  {
    path: "funcionarios/delete/:id_funcionario",
    component: FuncionariosDeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
