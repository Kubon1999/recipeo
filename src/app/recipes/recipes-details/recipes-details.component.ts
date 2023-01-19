import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from 'src/app/common/models/recipe';


@Component({
  selector: 'app-recipes-details',
  templateUrl: './recipes-details.component.html',
  styleUrls: ['./recipes-details.component.scss']
})

export class RecipesDetailsComponent {
  currentRecipe: Recipe = {
    _id: '',
    name: '',
    preparationTimeInMinutes: 0,
    description: '',
    ingredients: [],
  };
  originalName = '';
  @Output() save = new EventEmitter();
  @Input() set recipe(value : Recipe){
    if(!value){
      return
    }
    this.currentRecipe = {...value};
    this.originalName = this.currentRecipe.name;
  }
}
