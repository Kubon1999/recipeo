import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recipe } from '../models/recipe';

const BASE_URL = 'http://localhost:3000/';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  model =  'recipes';

  constructor(private http: HttpClient) { 

  }
  
  all() {
    return this.http.get(this.getUrl());
  }

  find(_id: string){
    return this.http.get(this.getUrlWithId(_id));
  }

  create(Recipe: Recipe){
    return this.http.post(this.getUrl(), Recipe);
  }

  update(Recipe: Recipe){
    return this.http.patch(this.getUrlWithId(Recipe._id), Recipe);
  }

  delete(_id: string){
    return this.http.delete(this.getUrlWithId(_id));
  }

  private getUrl() {
    return `${BASE_URL}${this.model}`;
  }

  private getUrlWithId(_id: string) {
    return `${this.getUrl()}/${_id}`;
  }

}
