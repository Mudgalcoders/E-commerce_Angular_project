import { Component } from '@angular/core';
import { UserDetailsComponent } from './user-details/user-details.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { RouterModule } from '@angular/router';
import { AgGridModule } from 'ag-grid-angular';

@Component({
  selector: 'app-root',
  standalone : true,
  // imports : [UserDetailsComponent],
  imports : [LoginPageComponent,HomePageComponent,RouterModule,AgGridModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // title = 'my-angular-app';
}
