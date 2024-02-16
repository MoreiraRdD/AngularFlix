import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NavegarComponent } from './component/navegar/navegar.component';
import { MovieComponent } from './component/movie/movie.component';
import { MovieInfoComponent } from './component/movie-info/movie-info.component';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, NavegarComponent, MovieComponent, MovieInfoComponent]
})
export class AppComponent {
  title = 'AngularFlix';
}
