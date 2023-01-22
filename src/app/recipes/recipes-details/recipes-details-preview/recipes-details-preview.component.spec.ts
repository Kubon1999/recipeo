import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipesDetailsPreviewComponent } from './recipes-details-preview.component';

describe('RecipesDetailsPreviewComponent', () => {
  let component: RecipesDetailsPreviewComponent;
  let fixture: ComponentFixture<RecipesDetailsPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipesDetailsPreviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipesDetailsPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
