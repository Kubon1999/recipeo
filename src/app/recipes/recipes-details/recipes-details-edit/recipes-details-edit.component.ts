import { Component, Output, Input, EventEmitter } from '@angular/core';
import { Recipe } from 'src/app/common/models/recipe';

@Component({
  selector: 'app-recipes-details-edit',
  templateUrl: './recipes-details-edit.component.html',
  styleUrls: ['./recipes-details-edit.component.scss']
})
export class RecipesDetailsEditComponent {

  constructor() { }

  originalName = '';

  currentRecipe: Recipe = {
    id: -1,
    name: '',
    preparationTimeInMinutes: 0,
    description: '',
    ingredients: [],
  };

  @Output() save = new EventEmitter();
  @Input() set recipe(value : Recipe){
    if(!value){
      return
    }
    this.currentRecipe = {...value};
    this.originalName = this.currentRecipe.name;
  }
}
