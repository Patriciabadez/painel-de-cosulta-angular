import { Component } from '@angular/core';
import { NotasService } from 'src/app/services/notas.service';
import { Observable, of } from 'rxjs';
import { FakeNotasService } from 'src/app/services/fake-notas.service';

@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.scss'],
})
export class DashboardHomeComponent {
  notas: any[] = [];

  constructor(private notasService: FakeNotasService) {}

// CHAMADA DA API PARA NOTAS
  getNotas() {
    this.notasService.getNotas().subscribe((data: any[]) => {
      this.notas = data;
    });
  }
}
