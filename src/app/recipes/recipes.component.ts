import { Component } from '@angular/core';
import { Recipe } from '../common/models/recipe';
import { RecipesService } from '../common/services/recipes.service';
import { ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';


const emptyRecipe: Recipe = {
  id: -1,
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
  recipeDetailsState = 'preview'; // preview | edit | new

  constructor(private recipesService: RecipesService, private ref: ChangeDetectorRef) {
  }
  
  ngOnInit(): void {
    this.fetchRecipes();
  }

  selectRecipe(recipe: Recipe) {
    this.recipeDetailsState = 'preview';
    this.selectedRecipe = recipe;
    console.log("Selected recipe: ", recipe);
  }

  newRecipe() {
    this.recipeDetailsState = 'new';
    console.log("New recipe");
  }

  editRecipe(recipe: Recipe) {
    this.selectedRecipe = recipe;
    this.recipeDetailsState = 'edit';
    console.log("Editing recipe: ", recipe);
  }

  saveRecipe(recipe : any) {
    this.updateRecipe(recipe);
    console.log("Saving recipe: ", recipe);
  }

  fetchRecipes(){
      this.recipesService.all().subscribe((result : any) => {
        console.log("Recipes: ", result)
        this.recipes = result;
        if(this.recipes.length != 0){
          this.selectRecipe(this.recipes[0]);
          this.recipeDetailsState = 'preview';
        }
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
    this.recipesService.delete(recipe.id).subscribe(result => {
      this.fetchRecipes();
    })
    console.log("Deleting recipe: " + recipe.id);
  }

  reset(){
    this.selectRecipe({...emptyRecipe});
  }


}
