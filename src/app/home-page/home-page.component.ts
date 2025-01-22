import { Component, TemplateRef } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { WarehouseManagementComponent } from './warehouse-management/warehouse-management.component';
import { AddWarehouseFormComponent } from './add-warehouse-management/add-warehouse-management.component';
import { NgIf } from '@angular/common';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [WarehouseManagementComponent, AddWarehouseFormComponent, NgIf, ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  isAddWarehouseVisible = false;  // To control the visibility of the popup
  constructor(
    private ApiService : ApiService,
    private Router : Router,
    public dialog: MatDialog,

  ){

  }
   ngOnInit(): void {
     
    }
    logOut(){
     this.ApiService.UserLogout('userlogindetails/logout').subscribe(resp =>{
       if(resp.status ==='success'){
        localStorage.clear();
        this.Router.navigate(['/'])
       }
     })
    }

    // Open Popup with TemplateRef
  openAddWarehouseForm(templateRef: TemplateRef<any>): void {
    const dialogRef: MatDialogRef<any> = this.dialog.open(templateRef, {
      disableClose: true,
      width: '50px', // Adjust width as needed
      height: '100px',
      
      panelClass: 'custom-dialog-container', // Optional custom styles

    });

    dialogRef.afterClosed().subscribe((result : any) => {
      if (result === 'submitted') {
        this.handlePopupSubmission();
      }
    });
  }

  // Handle Popup Close
  closeDialog(dialogRef: MatDialogRef<any>): void {
    dialogRef.close('closed');
  }

  // Handle Popup Submission
  submitDialog(dialogRef: MatDialogRef<any>): void {
    // Perform form submission logic here
    dialogRef.close('submitted');
  }

  private handlePopupSubmission(): void {
    // Implement the logic to be executed after submission
    console.log('Popup form submitted successfully!');
  }

    // openAddWarehouseForm(templateRef: TemplateRef<any>){
    //   // const formComponent = new AddWarehouseFormComponent();
    //   // formComponent.openPopup();
    //   // this.isAddWarehouseVisible = true; 
    //   // const ref = this.dialog.open(AddWarehouseFormComponent, {
    //   //   header: 'Popup Title',
    //   //   width: '70%',
    //   //   contentStyle: { 'max-height': '500px', 'overflow': 'auto' },
    //   // });
    //   this.dialog.open(templateRef, { disableClose: true });
    // }
  
    // // closeAddWarehouseForm() {
    // //   this.isAddWarehouseVisible = false;  // Set this flag to false to hide the popup
    // // }

    // submit(){

    // }
    // close(){

    // }
}
