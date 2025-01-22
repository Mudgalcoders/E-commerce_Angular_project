import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWarehouseManagementComponent } from './add-warehouse-management.component';

describe('AddWarehouseManagementComponent', () => {
  let component: AddWarehouseManagementComponent;
  let fixture: ComponentFixture<AddWarehouseManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddWarehouseManagementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddWarehouseManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
