import { Routes } from '@angular/router';
import { MovieComponent } from './component/movie/movie.component';
import { MovieInfoComponent } from './component/movie-info/movie-info.component';
import { PesquisaComponent } from './component/pesquisa/pesquisa.component';

export const routes: Routes = [
    {path:'', component: MovieComponent},
    {path:'movie', component: MovieComponent},
    {path:'movie/:id', component: MovieInfoComponent},
    {path:'pesquisa/:title', component: PesquisaComponent}]
    