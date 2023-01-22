import { Component, Input } from '@angular/core';
import { Recipe } from 'src/app/common/models/recipe';

@Component({
  selector: 'app-recipes-details-preview',
  templateUrl: './recipes-details-preview.component.html',
  styleUrls: ['./recipes-details-preview.component.scss']
})
export class RecipesDetailsPreviewComponent {
  recipe: Recipe = {
    id: -1,
    name: '',
    preparationTimeInMinutes: 0,
    description: '',
    ingredients: [],
  };

  @Input() set setRecipe(value : Recipe){
    this.recipe = value;
  }
}
