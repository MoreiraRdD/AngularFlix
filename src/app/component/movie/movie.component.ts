import { Component, Injectable, OnInit, inject, } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { environment } from '../../../environments/environment.development';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { ImageModule } from 'primeng/image';

const imgUrl = environment.imgUrl


@Component({
  selector: 'app-movie',
  standalone: true,
  imports: [RouterLink, RouterLinkActive,RouterOutlet, CarouselModule, ButtonModule, ImageModule],
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.css'
})

@Injectable({
  providedIn: 'root'
})


export class MovieComponent implements OnInit{
getSeverity(arg0: any): string|undefined {
throw new Error('Method not implemented.');
}

  public movieService = inject(MovieService)

  NowPlaying: any = []
  Popular: any = []
  TopRated: any = []
  Upcomig: any = []
  Latest: any = []
  

  ngOnInit(): void {
    this.loadNowPlaying()
    this.loadPopular()
    this.loadTopRated()
    this.loadUpcoming()
    this.loadLatest()
  }

  loadNowPlaying(){

    this.movieService.getNowPlaying().subscribe({
      next : (res: any) =>{
        this.NowPlaying = res.results
        //console.log(this.NowPlaying)
        
      },
      error:(error) => console.log(' Error fetching movies:', error)
    })
  }

  loadPopular (){

    this.movieService.getPopular().subscribe({
      next : (res: any) =>{
        this.Popular = res.results
        //console.log(res.results)
      },
      error:(error) => console.log(' Error fetching movies:', error)
    })
  }

  loadTopRated (){ 

    this.movieService.getTopRated().subscribe({
      next : (res: any) =>{
        this.TopRated = res.results
        //console.log(res.results)
      },
      error:(error) => console.log(' Error fetching movies:', error)
    })
  }

  loadUpcoming (){

    this.movieService.getUpcoming().subscribe({
      next : (res: any) =>{
        this.Upcomig = res.results
        //console.log(this.Upcomig)
      },
      error:(error) => console.log(' Error fetching movies:', error)
    })
  }

  loadLatest(){
    this.movieService.getLatest().subscribe({
      next : (res: any) =>{
        this.Latest = res
        //console.log(this.Latest)
      },
      error:(error) => console.log(' Error fetching movies:', error)
    })
  }

}



