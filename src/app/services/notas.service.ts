import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotasService {

  constructor(private http: HttpClient) { }
// CHAMADA PARA NOTAS FISCAIS 
  getNotas(): Observable<any[]> {
    return this.http.get<any[]>('caminho/para/as/notas/fiscais');
  }
}

