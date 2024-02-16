import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-pesquisa',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './pesquisa.component.html',
  styleUrl: './pesquisa.component.css'
})
export class PesquisaComponent implements OnInit{

  constructor(private route: ActivatedRoute, public movieService: MovieService) {
  }
  Search: any;
  pesquisado: any;

ngOnInit(): void {
    this.route.params.subscribe((title: any) =>{
      this.loadSearch(title.title)
      console.log(title)
    })
}

loadSearch(name: string){
  this.movieService.getSearch(name).subscribe({
    next : (res: any) =>{
      this.Search = res.results
      this.pesquisado = name
      console.log(this.Search)
    },
    error:(error) => console.log(' Error fetching movies:', error)
  })
 }

}

