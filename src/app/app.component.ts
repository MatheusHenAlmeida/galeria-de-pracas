import { Component } from '@angular/core';
import { SharedService } from './services/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  titulo = 'Galeria de Praças';

  constructor(private sharedService: SharedService) {
    this.sharedService.changeEmitted$.subscribe((data) => this.titulo = data.titulo);
  }
}
