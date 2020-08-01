import { Component, OnInit, Input } from '@angular/core';
declare let L;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  @Input() lat: string;
  @Input() lng: string;

  constructor() {
  }

  ngOnInit() {
    const lng = parseFloat(this.lng);
    const lat = parseFloat(this.lat);
    const map = L.map('map').setView([lat, lng], 16);
    // const map = L.map('map').setView([-23.626482, -46.557280], 18); // Para testar zoom do mapa

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([lat, lng]).addTo(map);
    // L.marker([-23.626482, -46.557280]).addTo(map); // Para ajusta posição do marcador
  }
}
