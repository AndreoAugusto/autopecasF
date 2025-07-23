import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';

//modulos importados de "material" para usar seus componentes
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';
//pegar http 
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';
import { HomeComponent } from './views/home/home.component';
import { ProductCrudComponent } from './views/product-crud/product-crud.component';
import { RedDirective } from './directives/red.directive';

//importações

import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { ClienteCreateComponent } from './components/cliente/cliente-create/cliente-create.component';
//import { ClienteComponent } from './components/cliente/cliente.component';
import { ClienteCrudComponent } from './views/cliente-crud/cliente-crud.component';
import { ClienteReadComponent } from './components/cliente/cliente-read/cliente-read.component';
import { ClienteUpdateComponent } from './components/cliente/cliente-update/cliente-update.component';
import { ClienteDeleteComponent } from './components/cliente/cliente-delete/cliente-delete.component';
import { ProdutosCreateComponent } from './components/produtos/produtos-create/produtos-create.component';
import { ProdutosReadComponent } from './components/produtos/produtos-read/produtos-read.component';
import { ProdutosUpdateComponent } from './components/produtos/produtos-update/produtos-update.component';
import { ProdutosDeleteComponent } from './components/produtos/produtos-delete/produtos-delete.component';
import { FornecedoresCreateComponent } from './components/fornecedores/fornecedores-create/fornecedores-create.component';
import { FornecedoresReadComponent } from './components/fornecedores/fornecedores-read/fornecedores-read.component';
import { FornecedoresUpdateComponent } from './components/fornecedores/fornecedores-update/fornecedores-update.component';
import { FornecedoresDeleteComponent } from './components/fornecedores/fornecedores-delete/fornecedores-delete.component';
import { FornecedoresCrudComponent } from './views/fornecedores-crud/fornecedores-crud/fornecedores-crud.component';
//import { FuncionariosComponent } from './components/funcionarios/funcionarios/funcionarios.component';
import { FuncionariosReadComponent } from './components/funcionarios/funcionarios-read/funcionarios-read.component';
import { FuncionariosCreateComponent } from './components/funcionarios/funcionarios-create/funcionarios-create.component';
import { FuncionariosUpdateComponent } from './components/funcionarios/funcionarios-update/funcionarios-update.component';
import { FuncionariosDeleteComponent } from './components/funcionarios/funcionarios-delete/funcionarios-delete.component';
import { FuncionariosCrudComponent } from './views/funcionarios-crud/funcionarios-crud/funcionarios-crud.component';

registerLocaleData(localePt)

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    ProductCrudComponent,
    RedDirective,
    ClienteCreateComponent,
    //ClienteComponent,
    ClienteCrudComponent,
    ClienteReadComponent,
    ClienteUpdateComponent,
    ClienteDeleteComponent,
    ProdutosCreateComponent,
    ProdutosReadComponent,
    ProdutosUpdateComponent,
    ProdutosDeleteComponent,
    FornecedoresCreateComponent,
    FornecedoresReadComponent,
    FornecedoresUpdateComponent,
    FornecedoresDeleteComponent,
    FornecedoresCrudComponent,
    //FuncionariosComponent,
    FuncionariosReadComponent,
    FuncionariosCreateComponent,
    FuncionariosUpdateComponent,
    FuncionariosDeleteComponent,
    FuncionariosCrudComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    //precisamos declarar os modulos de material importados
    MatToolbarModule, 
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'pt-BR'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
