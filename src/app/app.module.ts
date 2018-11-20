import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { AddOrEditPopupComponent } from './components/add-or-edit-popup/add-or-edit-popup.component';
import { PopupComponent } from './shared/popup/popup.component';
import { HeaderComponent } from './components/header/header.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { MoviesService } from './services/movies-service.service';
import { MoviesItemComponent } from './components/movies-list/movies-item/movies-item.component';
import { CleanTitle } from './shared/cleanTitle.pipe'
import { CamelCase } from './shared/camelCase.pipe'


@NgModule({
  declarations: [
    AppComponent,
    MoviesListComponent,
    AddOrEditPopupComponent,
    PopupComponent,
    HeaderComponent,
    PageNotFoundComponent,
    MoviesItemComponent,
    CleanTitle,
    CamelCase

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
