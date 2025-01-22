// import { NgIf } from '@angular/common';
// import { Component, NgModule } from '@angular/core';
// import { FormsModule } from '@angular/forms';

// @Component({
//   selector: 'app-add-warehouse-management',
//   standalone : true,
//   imports: [FormsModule,NgIf],
//   templateUrl: './add-warehouse-management.component.html',
//   styleUrls: ['./add-warehouse-management.component.css']
// })
// export class AddWarehouseFormComponent {
//   isVisible: boolean = false;
//   warehouse = {
//     productName: '',
//     productDescription: '',
//     productImage: '',
//   };

//   openPopup() {
//     this.isVisible = true;
//   }

//   closePopup() {
//     this.isVisible = false;
//   }

//   onSubmit() {
//     // Handle form submission (you can send the form data to your backend)
//     console.log('Warehouse added:', this.warehouse);
//     this.closePopup(); // Close the form after submission
//   }
// }


import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-warehouse-management',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './add-warehouse-management.component.html',
  styleUrls: ['./add-warehouse-management.component.css'],
})
export class AddWarehouseFormComponent {
  isVisible: boolean = false;
  warehouseForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.warehouseForm = this.fb.group({
      productName: ['', [Validators.required]],
      productDescription: [''],
      productImage: [''],
    });
  }

  openPopup() {
    this.isVisible = true;
  }

  closePopup() {
    this.isVisible = false;
  }

  onSubmit() {
    if (this.warehouseForm.valid) {
      console.log('Warehouse added:', this.warehouseForm.value);
      this.closePopup();
      this.warehouseForm.reset(); // Clear the form after submission
    } else {
      console.log('Form is invalid');
    }
  }
}

