import { Component } from '@angular/core';
import { NavbarComponent } from '../../addition/navbar/navbar.component';
import { FooterComponent } from '../../addition/footer/footer.component';
import { OneUserComponent } from '../../addition/one-user/one-user.component';
import { UserService } from '../../../shared/services/user.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, OneUserComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  allUsers!: any[]
  constructor(private _UserService: UserService) {}

  ngOnInit(): void {
    this._UserService.getUsersPage('1').subscribe((res) => {
      console.log(res);
      this.allUsers = res.data;
    });

    this._UserService.getUserById('1').subscribe((res) => {
      console.log(res);
    });
  }
}
