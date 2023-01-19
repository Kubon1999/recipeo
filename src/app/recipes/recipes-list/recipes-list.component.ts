import { Component } from '@angular/core';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss']
})
export class RecipesListComponent {
  recipes = [
    {
      name: 'Recipe 1',
      description: 'Description 1',
    }
  ];

}
