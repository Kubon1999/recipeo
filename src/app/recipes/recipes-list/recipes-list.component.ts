import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Recipe } from 'src/app/common/models/recipe';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss']
})
export class RecipesListComponent {
  @Input() recipes: Recipe[] = [];
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();
}
