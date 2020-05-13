import { Component } from '@angular/core';
import { UserService } from './services/user.service';
import { IUser } from './models/IUser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'teste-angular';
  private usuarios: IUser[];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getUsers().subscribe((data: IUser[]) => {
      this.usuarios = data;
      console.log(this.usuarios);
    });
  }
}
