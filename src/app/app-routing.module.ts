import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';

const routes: Routes = [
{
    path:'movies', component: MoviesListComponent
}
,
 {
    path:'', redirectTo:'/movies', pathMatch: 'full'
}
,
 {
    path:'**', component: PageNotFoundComponent
}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
