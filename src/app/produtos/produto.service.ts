import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { environment } from 'src/environments/environment.prod';
import { Produto } from './produto';

@Injectable()
export class ProdutoService {

    constructor(private http: HttpClient) { }

    private baseUrl = environment.BASE_URL_API_JSON;

    getProdutos(): Observable<Produto[]> {
        return this.http.get<Produto[]>(`${this.baseUrl}/produtos`)
    }

}