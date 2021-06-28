import { Component, Input, OnInit } from '@angular/core';
import { IPraca } from 'src/app/models/IPraca';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss']
})
export class CardItemComponent implements OnInit {
  @Input() praca: IPraca;

  constructor() { }

  ngOnInit(): void {
  }

  getImageUrl(): string {
    if (this.praca.picture.length <= 0 || this.praca.picture == '')
      return '';
    return 'data:image/jpeg;base64,' + this.praca.picture;
  }
}
