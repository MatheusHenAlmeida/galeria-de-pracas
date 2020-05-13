import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/models/IUser';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-usuarios-lista',
  templateUrl: './usuarios-lista.component.html',
  styleUrls: ['./usuarios-lista.component.scss']
})
export class UsuariosListaComponent implements OnInit {

  usuarios: IUser[];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getUsers().subscribe((data: IUser[]) => {
      this.usuarios = data;
    });
  }
}
