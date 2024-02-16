import { Component, OnInit} from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { environment } from '../../../environments/environment.development';
import { RouterLink, RouterLinkActive, RouterOutlet, ActivatedRoute } from '@angular/router';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { ImageModule } from 'primeng/image';

const imgUrl = environment.imgUrl

@Component({
  selector: 'app-movie-info',
  standalone: true,
  imports: [RouterLink, RouterLinkActive,RouterOutlet, CarouselModule, ButtonModule, ImageModule],
  templateUrl: './movie-info.component.html',
  styleUrl: './movie-info.component.css',
  providers: [MovieService]
})
export class MovieInfoComponent implements OnInit{


  constructor(private route: ActivatedRoute, public movieService: MovieService) {
  }

  movie: any = []
  credits: any = []
  similars: any = []


  ngOnInit(): void {
    this.route.params.subscribe((movie: any) =>{
      this.loadMoviebyID(movie.id)
      this.loadMovieCredits(movie.id)
      this.loadSimilarMovies(movie.id)
    })
  }

  loadMoviebyID(movieId: number){
    this.movieService.getMovieByID(movieId).subscribe({
      next : (res: any) =>{
        this.movie = res
        //console.log(this.movie)
      },
      error:(error) => console.log(' Error fetching movies:', error)
    })
  }

  loadMovieCredits(movieId: number){
    this.movieService.getMovieCredits(movieId).subscribe({
      next : (res: any) =>{
        this.credits = res.cast
        //console.log(this.credits)
      },
      error:(error) => console.log(' Error fetching movies:', error)
    })
  }

  loadSimilarMovies(movieId: number){
    this.movieService.getSimilarMovies(movieId).subscribe({
      next : (res: any) =>{
        this.similars = res.results
        console.log(this.similars)
      },
      error:(error) => console.log(' Error fetching movies:', error)
    })
  }

  getFullImageUrl(posterPath: String) : String{
    return imgUrl + posterPath
   }

}
