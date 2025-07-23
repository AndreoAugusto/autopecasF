import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//importando matSnackBar
import {MatSnackBar} from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Fornecedores } from './fornecedores.model';

@Injectable({
  providedIn: 'root'
})

export class FornecedorService {

  baseUrl = "http://localhost:8080/fornecedores"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X',{
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  create(fornecedor: Fornecedores): Observable<Fornecedores>{
    return this.http.post<Fornecedores>(this.baseUrl, fornecedor)
  }

  read(): Observable<Fornecedores[]>{
    return this.http.get<Fornecedores[]>(this.baseUrl)
  }

  readById(id_fornecedor: string): Observable<Fornecedores>{
    const url = `${this.baseUrl}/${id_fornecedor}`
    return this.http.get<Fornecedores>(url)
  }
 
  update(fornecedor: Fornecedores): Observable<Fornecedores>{
    const url = `${this.baseUrl}/${fornecedor.id_fornecedor}`
    return this.http.put<Fornecedores>(url, fornecedor)
  }
  
  delete(id_fornecedor: number): Observable<Fornecedores>{    
    const url = `${this.baseUrl}/${id_fornecedor}`
    return this.http.delete<Fornecedores>(url)
  }
}  
