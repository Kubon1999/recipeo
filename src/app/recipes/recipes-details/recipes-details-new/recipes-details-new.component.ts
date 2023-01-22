import { Component, Output, EventEmitter } from '@angular/core';
import { Recipe } from 'src/app/common/models/recipe';

@Component({
  selector: 'app-recipes-details-new',
  templateUrl: './recipes-details-new.component.html',
  styleUrls: ['./recipes-details-new.component.scss']
})
export class RecipesDetailsNewComponent {
  recipe: Recipe = {
    id: -1,
    name: '',
    preparationTimeInMinutes: 0,
    description: '',
    ingredients: [],
  };
  constructor() { }

  @Output() newRecipe = new EventEmitter();

}
