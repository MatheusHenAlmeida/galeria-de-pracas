import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IUser } from 'src/app/models/IUser';
import { UserService } from 'src/app/services/user.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-usuarios-lista',
  templateUrl: './usuarios-lista.component.html',
  styleUrls: ['./usuarios-lista.component.scss']
})
export class UsuariosListaComponent implements OnInit {

  usuarios: IUser[];

  constructor(private userService: UserService, private sharedService: SharedService) {}

  ngOnInit() {
    this.userService.getUsers().subscribe((data: IUser[]) => {
      // setTimeout(() => this.usuarios = data, 5000) // Para testar o loading-bar
      this.usuarios = data;
    });
    this.sharedService.emitChange({ titulo : 'Lista de usuários' });
  }
}
