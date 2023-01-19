import { Component } from '@angular/core';
import { Recipe } from '../common/models/recipe';
import { RecipesService } from '../common/services/recipes.service';
import { ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';


const emptyRecipe: Recipe = {
  _id: '',
  name: '',
  preparationTimeInMinutes: 0,
  description: '',
  ingredients: [],
}


@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecipesComponent {
  recipes = [];

  selectedRecipe = emptyRecipe;

  constructor(private recipesService: RecipesService, private ref: ChangeDetectorRef) {
  }
  
  ngOnInit(): void {
    this.fetchRecipes();
  }

  selectRecipe(recipe: Recipe) {
    this.selectedRecipe = recipe;
  }

  saveRecipe(recipe : any) {
    console.log(recipe);
    if(recipe._id){
      this.updateRecipe(recipe);
    }else{
      this.createRecipe(recipe);
    }
    console.log("Saving recipe: ", recipe);
  }

  fetchRecipes(){
      this.recipesService.all().subscribe((result : any) => {
        console.log("Recipes: ", result)
        this.recipes = result;
        this.ref.detectChanges();
    })
  }

  updateRecipe(recipe: Recipe){
    this.recipesService.update(recipe).subscribe(result => {
      this.fetchRecipes();
    })
  }

  createRecipe(recipe: Recipe){
    this.recipesService.create(recipe).subscribe(result => {
      this.fetchRecipes();
    })
  }

  deleteRecipe(recipe: Recipe){
    console.log(recipe)
    let recipeId = recipe._id;
    this.recipesService.delete(recipeId).subscribe(result => {
      this.fetchRecipes();
    })
    console.log("Deleting recipe: " + recipeId);
  }

  reset(){
    this.selectRecipe({...emptyRecipe});
  }


}
