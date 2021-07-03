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
    // Listen the events of title's updates
    this.sharedService.changeEmitted$.subscribe((data) => this.titulo = data.titulo);
  }
}
