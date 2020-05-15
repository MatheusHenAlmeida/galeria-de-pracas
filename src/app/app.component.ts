import { Component } from '@angular/core';
import { UserService } from './services/user.service';
import { IUser } from './models/IUser';
import { SharedService } from './services/shared.service';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  titulo = 'teste-angular';

  constructor(private sharedService: SharedService) {
    this.sharedService.changeEmitted$.subscribe((data) => this.titulo = data.titulo);
  }
}
