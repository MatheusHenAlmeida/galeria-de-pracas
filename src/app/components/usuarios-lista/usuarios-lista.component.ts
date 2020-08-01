import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IPraca } from 'src/app/models/IPraca';
import { UserService } from 'src/app/services/user.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-usuarios-lista',
  templateUrl: './usuarios-lista.component.html',
  styleUrls: ['./usuarios-lista.component.scss']
})
export class UsuariosListaComponent implements OnInit {

  pracas: IPraca[];

  constructor(private pracasService: UserService, private sharedService: SharedService) {}

  ngOnInit() {
    this.pracasService.getPracas().subscribe((data: IPraca[]) => {
      // setTimeout(() => this.pracas = data, 5000) // Para testar o loading-bar
      this.pracas = data;
    });
    this.sharedService.emitChange({ titulo : 'Galeria de Praças' });
  }
}
