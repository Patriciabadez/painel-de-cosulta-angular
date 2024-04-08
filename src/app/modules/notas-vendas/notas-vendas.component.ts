import { Component } from '@angular/core';

@Component({
  selector: 'app-notas-vendas',
  templateUrl: './notas-vendas.component.html',
  styleUrls: ['./notas-vendas.component.scss']
})
export class NotasVendasComponent {
  consultas = [
    { id: 1, nome: 'Notas de Vendas', rota: '/notas-vendas' },
    { id: 2, nome: 'Notas de Entradas', rota: '/notas-entradas' },
    { id: 3, nome: 'Voltar ao inicio', rota: '/home' },
    { id: 3, nome: 'Sair', rota: '/' }
  
  ];
}
