import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditItemCategoryComponent } from './edit-item-category.component';

describe('EditItemCategoryComponent', () => {
  let component: EditItemCategoryComponent;
  let fixture: ComponentFixture<EditItemCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditItemCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditItemCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
