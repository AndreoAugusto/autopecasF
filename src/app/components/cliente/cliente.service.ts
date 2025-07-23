import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//importando matSnackBar
import {MatSnackBar} from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Clientes } from './cliente.model';

@Injectable({
  providedIn: 'root'
})

export class ClienteService {

  baseUrl = "http://localhost:8080/clientes"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X',{
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  create(cliente: Clientes): Observable<Clientes>{
    return this.http.post<Clientes>(this.baseUrl, cliente)
  }

  read(): Observable<Clientes[]>{
    return this.http.get<Clientes[]>(this.baseUrl)
  }

  readById(id_cliente: string): Observable<Clientes>{
    const url = `${this.baseUrl}/${id_cliente}`
    return this.http.get<Clientes>(url)
  }
 
  update(cliente: Clientes): Observable<Clientes>{
    const url = `${this.baseUrl}/${cliente.id_cliente}`
    return this.http.put<Clientes>(url, cliente)
  }
  
  delete(id_cliente: number): Observable<Clientes>{    
    const url = `${this.baseUrl}/${id_cliente}`
    return this.http.delete<Clientes>(url)
  }


}  
