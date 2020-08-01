import { Component, OnInit, AfterViewInit, EventEmitter, Output, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { IPraca } from 'src/app/models/IPraca';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-usuario-detalhe',
  templateUrl: './usuario-detalhe.component.html',
  styleUrls: ['./usuario-detalhe.component.scss']
})
export class UsuarioDetalheComponent implements OnInit {
  id: number;
  usuario: IPraca = null;

  constructor(private activatedRoute: ActivatedRoute,
    private userService: UserService, private sharedService: SharedService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
      this.userService.getPraca(this.id).subscribe((user: IPraca) => {
        // setTimeout(() => this.usuario = user, 5000) // Para testar o loading-bar
        this.usuario = user;
        // console.log(`Rua: ${this.usuario.address.street}, Cidade: ${this.usuario.address.city}`);
      });
    });

    this.sharedService.emitChange({ titulo : 'Detalhes do usuário' });
  }
}
