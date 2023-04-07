import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroceryNewComponent } from './grocery-new.component';

describe('GroceryNewComponent', () => {
  let component: GroceryNewComponent;
  let fixture: ComponentFixture<GroceryNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroceryNewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GroceryNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
