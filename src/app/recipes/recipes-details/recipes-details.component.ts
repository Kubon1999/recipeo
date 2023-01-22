import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from 'src/app/common/models/recipe';


@Component({
  selector: 'app-recipes-details',
  templateUrl: './recipes-details.component.html',
  styleUrls: ['./recipes-details.component.scss']
})

export class RecipesDetailsComponent {
  currentRecipe: Recipe = {
    id: -1,
    name: '',
    preparationTimeInMinutes: 0,
    description: '',
    ingredients: [],
  };
  originalName = '';
  recipeDetailsState = 'preview'; // preview | edit | new
  @Output() save = new EventEmitter();
  @Output() create = new EventEmitter();
  @Input() set setRecipeDetailsState(state: string) {
    this.recipeDetailsState = state;
  }
  @Input() set recipe(value : Recipe){
    if(!value){
      return
    }    
    this.currentRecipe = {
      id: value.id,
      name: value.name,
      preparationTimeInMinutes: value.preparationTimeInMinutes,
      description: value.description,
      ingredients: value.ingredients,
    };
    this.originalName = this.currentRecipe.name;
  }

  saveRecipe(recipe: Recipe) {
    this.save.emit(recipe);
  }

  createRecipe(recipe: Recipe) {
    this.create.emit(recipe);
  }
}
