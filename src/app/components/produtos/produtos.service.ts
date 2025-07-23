import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Observable } from "rxjs";
import { Produtos } from "./produtos.model";

@Injectable({
    providedIn: 'root'
})
export class ProdutosService {

    baseUrl = "http://localhost:8080/produtos"

    constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

    showMessage(msg: string): void {
        this.snackBar.open(msg, 'X',{
            duration: 3000,
            horizontalPosition: "right",
            verticalPosition: "top"
        })
    }

    create(produtos: Produtos): Observable<Produtos>{
        return this.http.post<Produtos>(this.baseUrl, produtos)
    }

    read(): Observable<Produtos[]>{
        return this.http.get<Produtos[]>(this.baseUrl)
    }

    readById(id_produto: string): Observable<Produtos>{
        const url = `${this.baseUrl}/${id_produto}`
        return this.http.get<Produtos>(url)
    }

    update(produtos: Produtos): Observable<Produtos>{
        const url = `${this.baseUrl}/${produtos.id_produto}`
        return this.http.put<Produtos>(url, produtos)
    }

    delete(id_produto: number): Observable<Produtos>{    
        const url = `${this.baseUrl}/${id_produto}`
        return this.http.delete<Produtos>(url)
    }
}