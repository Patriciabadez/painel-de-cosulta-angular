import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FakeNotasService {

  constructor() { }

   // Método para simular a obtenção das notas fiscais
   getNotas(): Observable<any[]> {
    // Simulando dados fictícios de notas fiscais
    const nota: any[] = [
      { id: 1, cnpj: '1234567890', valor: 100.00, cfop: '5102', total: 110.00 },
      { id: 2, cnpj: '0987654321', valor: 150.00, cfop: '6102', total: 160.00 },
      // Adicione mais notas fiscais fictícias conforme necessário
    ];

    // Retornando os dados simulados como um Observable
    return of(nota);
  }
}

