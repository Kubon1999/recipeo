import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { NavbarComponent } from './navbar/navbar.component';
import { NavbarDialogComponent } from './navbar/navbar-dialog/navbar-dialog.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipesListComponent } from './recipes/recipes-list/recipes-list.component';
import { RecipesDetailsComponent } from './recipes/recipes-details/recipes-details.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RecipesDetailsEditComponent } from './recipes/recipes-details/recipes-details-edit/recipes-details-edit.component';
import { RecipesDetailsPreviewComponent } from './recipes/recipes-details/recipes-details-preview/recipes-details-preview.component';
import { RecipesDetailsNewComponent } from './recipes/recipes-details/recipes-details-new/recipes-details-new.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavbarDialogComponent,
    RecipesComponent,
    RecipesListComponent,
    RecipesDetailsComponent,
    RecipesDetailsEditComponent,
    RecipesDetailsPreviewComponent,
    RecipesDetailsNewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
