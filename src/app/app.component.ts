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

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getUsers().subscribe((data: IUser[]) => {
      console.log(data);
    })
  }
}
