import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recipe } from '../models/recipe';

 //const BASE_URL = 'https://crudcrud.com/api/4fcefb089e66498d9ca1e99f5344e10c/';

 const BASE_URL = 'http://localhost:3000/';

@Injectable({
  providedIn: 'root'
})

export class RecipesService {

  model =  'recipe';

  constructor(private http: HttpClient) { 

  }
  
  all() {
    return this.http.get(this.getUrl());
  }

  find(id: number){
    return this.http.get(this.getUrlWithId(id));
  }

  create(recipe: Recipe){
    const { id, ...restObject } = recipe;
    return this.http.post(this.getUrl(), restObject);
  }

  update(recipe: Recipe){
    const { id, ...restObject } = recipe;
    return this.http.put(this.getUrlWithId(recipe.id), restObject);
  }

  delete(id: number){
    return this.http.delete(this.getUrlWithId(id));
  }

  private getUrl() {
    return `${BASE_URL}${this.model}`;
  }

  private getUrlWithId(id: number) {
    return `${this.getUrl()}/${id}`;
  }

}
