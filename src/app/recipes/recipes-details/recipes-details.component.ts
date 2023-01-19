import { Component } from '@angular/core';

@Component({
  selector: 'app-recipes-details',
  templateUrl: './recipes-details.component.html',
  styleUrls: ['./recipes-details.component.scss']
})
export class RecipesDetailsComponent {
  currentRecipe = {
    id: null,
    name: '',
    description: '',
  }

  submit(){
    console.log(this.currentRecipe);
  }
}
