import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-signup-page',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './signup-page.component.html',
  styleUrl: './signup-page.component.css'
})
export class SignupPageComponent {
  signupForm : any = FormGroup
  constructor(
    private fb : FormBuilder,
    private ApiService : ApiService
  ){

  }
   ngOnInit(): void {
      this.signupForm = this.fb.group({
        Name:['', [Validators.required]],
        Email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required]],
        cPassword: ['', [Validators.required]],

      });
    }
  onSubmit(){
   if(this.signupForm.valid){
     console.log(this.signupForm.value,"signupForm");
     this.ApiService.PostData('userlogindetails/userlogindetailsregister',this.signupForm.value).subscribe(resp => {
      console.log(resp,"PostData");
      
    },err =>{
      
    })
   }
  }
}
