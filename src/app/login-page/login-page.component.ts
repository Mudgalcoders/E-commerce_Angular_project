// import { Component } from '@angular/core';

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router, RouterLink} from '@angular/router';
import { ApiService } from '../api.service';



@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [ReactiveFormsModule,RouterLink],
  providers:[ApiService],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {
  loginForm:any = FormGroup;

  constructor(
    private fb: FormBuilder,
    public ApiService : ApiService,
    private Router : Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      Email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const loginData = this.loginForm.value;
      this.ApiService.LoginPostData('userlogindetails/login',loginData).subscribe(resp => {
        console.log(resp,"PostData");
        if(resp?.status === 'success'){ 
          const accessToken = resp.token;

          // Store the access token in localStorage
          if (accessToken) {
            localStorage.setItem('access_token', accessToken);
            console.log('Access token stored in localStorage');
          }       
        this.Router.navigate(['login/home']);
      }
      },err=>{
        console.log(err,"LoginPostData");
        
      })
      // Call the Node.js API for login
      // this.http.post(this.apiUrl, loginData).subscribe(
      //   (response: any) => {
      //     // Handle successful login response
      //     console.log('Login successful', response);
      //     // Redirect to the dashboard or homepage
      //     this.router.navigate(['/dashboard']);
      //   },
      //   (error) => {
      //     // Handle error response
      //     console.error('Login failed', error);
      //   }
      // );
    }
  }
}
