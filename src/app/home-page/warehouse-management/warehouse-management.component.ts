// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-warehouse-management',
//   standalone: true,
//   imports: [],
//   templateUrl: './warehouse-management.component.html',
//   styleUrl: './warehouse-management.component.css'
// })
// export class WarehouseManagementComponent {

// }


import { isPlatformBrowser, NgIf } from '@angular/common';
import { Component, Inject, PLATFORM_ID, OnInit } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { AllCommunityModule, ColDef, ModuleRegistry } from 'ag-grid-community';
import { ApiService } from '../../api.service';
import { environment } from '../../../environment/environment';
ModuleRegistry.registerModules([AllCommunityModule]);

@Component({
  selector: 'app-warehouse-management',
  standalone: true,
  imports: [NgIf, AgGridAngular],  // Start with an empty imports array
  templateUrl: './warehouse-management.component.html',
  styleUrls: ['./warehouse-management.component.css']  // Corrected 'styleUrl' to 'styleUrls'
})
export class WarehouseManagementComponent implements OnInit {  // <-- Added 'implements OnInit'

  gridOptions = {
    rowHeight: 50,  // Set the default row height
    // Other grid options
  };
  colDefs: ColDef[] = [
    {
      headerName: "Product Name",
      field: "productName",  // Field name from Sequelize model
      flex: 0.5,
      sortable: true,
      filter: true
    },
    {
      headerName: "Description",
      field: "productDescription",  // Field name from Sequelize model
      flex: 1,
      sortable: true,
      filter: true
    },
    {
      headerName: "Image",
      field: "filepath",  // Field name from Sequelize model
      flex: 1,
      sortable: true,
      filter: true,
      cellRenderer: (params: any) => {
        const imageUrl = params.value; // Get the image URL from 'filepath'
        const baseUrl = environment.serverUrl; // Replace with your server's base URL
        
        if (imageUrl) {
            // If the image path is stored as a relative path, prepend the base URL
            const fullImageUrl = `${baseUrl}${imageUrl}`;
            return `<img src="${fullImageUrl}" alt="Product Image" style="width: 100px; height: 40px;" />`;
        } else {
            return 'No Image'; // Fallback text in case of no image
        }
    }
    },
    {
      headerName: "Image Extension",
      field: "productImageExtension",  // Field name from Sequelize model
      flex: 1,
      sortable: true,
      filter: true
    },
    {
      headerName: "Actions", 
      flex: 1,
      cellRenderer: (params: any) => {
        return `
          <button onclick="viewDetails(${params.rowIndex})">View</button>
          <button onclick="updateRow(${params.rowIndex})">Update</button>
          <button onclick="deleteRow(${params.rowIndex})">Delete</button>
        `;
      },
    }
  ];

  rowData = [
  ];

  isBrowser: boolean = false;

  constructor(
    @Inject(PLATFORM_ID) private platformId: any,
    private ApiService: ApiService
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.ApiService.GetData('warehouseManagement/warehousegetdata').subscribe((resp: any) => {
      console.log(resp, "warehousegetdata");
      this.rowData = resp.data;
    }, err => {
      console.log(err, "warehousegetdata");
    });
  }
}


