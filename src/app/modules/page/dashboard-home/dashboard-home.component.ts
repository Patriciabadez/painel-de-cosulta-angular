import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.scss']
})
export class DashboardHomeComponent {
  consultas = [
    { id: 1, nome: 'Notas de Vendas', rota: '/notas-vendas' },
    { id: 2, nome: 'Notas de Entradas', rota: '/notas-entradas' },
    { id: 3, nome: 'Voltar ao inicio', rota: '/home' },
    { id: 3, nome: 'Sair', rota: '/' }

  ];

}

