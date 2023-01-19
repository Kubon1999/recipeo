import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recipe } from '../models/recipe';

 const BASE_URL = 'https://crudcrud.com/api/4fcefb089e66498d9ca1e99f5344e10c/';

 //const BASE_URL = 'http://localhost:3000/';

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

  find(_id: string){
    return this.http.get(this.getUrlWithId(_id));
  }

  create(recipe: Recipe){
    return this.http.post(this.getUrl(), recipe);
  }

  update(recipe: Recipe){
    const { _id, ...restObject } = recipe;
    return this.http.put(this.getUrlWithId(recipe._id), restObject);
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
