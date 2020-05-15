import { Component, OnInit, AfterViewInit, EventEmitter, Output, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { IUser } from 'src/app/models/IUser';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-usuario-detalhe',
  templateUrl: './usuario-detalhe.component.html',
  styleUrls: ['./usuario-detalhe.component.scss']
})
export class UsuarioDetalheComponent implements OnInit {
  id: number;
  usuario: IUser = null;

  constructor(private activatedRoute: ActivatedRoute,
    private userService: UserService, private sharedService: SharedService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
      this.userService.getUser(this.id).subscribe((user: IUser) => {
        this.usuario = user;
        console.log(`Rua: ${this.usuario.address.street}, Cidade: ${this.usuario.address.city}`);
      });
    });

    this.sharedService.emitChange({ "titulo" : "Detalhes do usuário" });
  }
}
