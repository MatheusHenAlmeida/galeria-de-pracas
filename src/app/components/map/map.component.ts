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
  private ATTRIBUTION_LABEL = '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

  constructor() {
  }

  ngOnInit() {
    const lng = parseFloat(this.lng);
    const lat = parseFloat(this.lat);
    const map = L.map('map').setView([lat, lng], 16);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: this.ATTRIBUTION_LABEL
    }).addTo(map);

    L.marker([lat, lng]).addTo(map);
  }
}
