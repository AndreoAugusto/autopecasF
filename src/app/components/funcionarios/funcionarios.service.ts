import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//importando matSnackBar
import {MatSnackBar} from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Funcionarios } from './funcionarios.model';

@Injectable({
  providedIn: 'root'
})

export class FuncionarioService {

  baseUrl = "http://localhost:8080/funcionarios"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X',{
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  create(funcionario: Funcionarios): Observable<Funcionarios>{
    return this.http.post<Funcionarios>(this.baseUrl, funcionario)
  }

  read(): Observable<Funcionarios[]>{
    return this.http.get<Funcionarios[]>(this.baseUrl)
  }

  readById(id_funcionario: string): Observable<Funcionarios>{
    const url = `${this.baseUrl}/${id_funcionario}`
    return this.http.get<Funcionarios>(url)
  }
 
  update(funcionario: Funcionarios): Observable<Funcionarios>{
    const url = `${this.baseUrl}/${funcionario.id_funcionario}`
    return this.http.put<Funcionarios>(url, funcionario)
  }
  
  delete(id_funcionario: number): Observable<Funcionarios>{    
    const url = `${this.baseUrl}/${id_funcionario}`
    return this.http.delete<Funcionarios>(url)
  }
}  
