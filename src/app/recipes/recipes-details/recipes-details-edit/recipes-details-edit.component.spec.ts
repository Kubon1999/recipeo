import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipesDetailsEditComponent } from './recipes-details-edit.component';

describe('RecipesDetailsEditComponent', () => {
  let component: RecipesDetailsEditComponent;
  let fixture: ComponentFixture<RecipesDetailsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipesDetailsEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipesDetailsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
