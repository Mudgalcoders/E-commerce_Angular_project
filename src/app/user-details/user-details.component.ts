import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [ReactiveFormsModule],
  providers:[ApiService],

  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent {

  formdetails: any =  FormGroup;  // Declare the form group

  constructor(
    private fb: FormBuilder,
    public ApiService : ApiService,
  ) {}

  ngOnInit(): void {
    // Initialize the form group with form controls and validation
    this.formdetails = this.fb.group({
      Name: [''],  // Adding validators like 'required'
      Mobile: [''],
      Designation: [''],
      createdBy : [1],  // Validate mobile number
    });

   this.getDetails();
   

    
  }

  // You can add methods for handling form submission, etc.
  onSubmit() {
    if (this.formdetails.valid) {
      console.log(this.formdetails.value);
      this.ApiService.PostData('shainkeydetails/createShainkeydetails',this.formdetails.value).subscribe(resp => {
        console.log(resp,"PostData");
        
      })
    }
  }

  getDetails(){
    this.ApiService.GetData('shainkeydetails/getshainkeydetails').subscribe(resp =>{
      console.log(resp,"GetData")
    })
  }

}
