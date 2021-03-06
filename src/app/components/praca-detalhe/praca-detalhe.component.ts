import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PracasService } from 'src/app/services/pracas.service';
import { IPraca } from 'src/app/models/IPraca';
import { SharedService } from 'src/app/services/shared.service';
import "leaflet/dist/images/marker-shadow.png";
import "leaflet/dist/images/marker-icon-2x.png";

@Component({
  selector: 'app-praca-detalhe',
  templateUrl: './praca-detalhe.component.html',
  styleUrls: [
    './praca-detalhe.component.scss',
    '../shared.styles.scss'
  ]
})
export class PracaDetalheComponent implements OnInit {
  id: number;
  praca: IPraca = null;

  constructor(private activatedRoute: ActivatedRoute,
    private userService: PracasService, private sharedService: SharedService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
      this.userService.getPraca(this.id).subscribe((praca: IPraca) => {
        this.praca = praca;
      });
    });

    this.sharedService.emitChange({ titulo : 'Detalhes da Praça' });
  }
}
