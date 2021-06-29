import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IPraca } from 'src/app/models/IPraca';
import { PracasService } from 'src/app/services/pracas.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-pracas-lista',
  templateUrl: './pracas-lista.component.html',
  styleUrls: [
    './pracas-lista.component.scss',
    '../shared.styles.scss'
  ]
})
export class PracasListaComponent implements OnInit {

  pracas: IPraca[];

  constructor(private pracasService: PracasService, private sharedService: SharedService) {}

  ngOnInit() {
    this.pracasService.getPracas().subscribe((data: IPraca[]) => {
      // setTimeout(() => this.pracas = data, 5000) // Para testar o loading-bar
      this.pracas = data;
    });
    this.sharedService.emitChange({ titulo : 'Galeria de Praças' });
  }
}
