import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipesDetailsNewComponent } from './recipes-details-new.component';

describe('RecipesDetailsNewComponent', () => {
  let component: RecipesDetailsNewComponent;
  let fixture: ComponentFixture<RecipesDetailsNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipesDetailsNewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipesDetailsNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
