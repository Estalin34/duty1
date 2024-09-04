import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface Destino {
  id: number;
  nombre: string;
  descripcion: string;
  imagen: string;
}
@Component({
  selector: 'app-viajes',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './viajes.component.html',
  styleUrl: './viajes.component.css',
})
export class ViajesComponent {
  destinos: Destino[] = [];

  ngOnInit(): void {
    this.destinos = [
      {
        id: 1,
        nombre: 'Paris',
        descripcion: 'La ciudad del amor.',
        imagen: 'public/image/Paris.jpg',
      },
      {
        id: 2,
        nombre: 'New York',
        descripcion: 'La ciudad que nunca duerme.',
        imagen: 'public/image/new.jpg',
      },
      {
        id: 3,
        nombre: 'Tokyo',
        descripcion: 'Una ciudad vibrante y tecnológica.',
        imagen: 'public/image/tokyo.jpg',
      },
    ];
  }
}    
