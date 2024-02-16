import { Injectable, inject } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const imgUrl = environment.imgUrl
const apiUrl = environment.apiUrl
const acessToken = environment.acessToken

@Injectable({
  providedIn: 'root'
})

export class MovieService {

  private http = inject (HttpClient);

  constructor() {}

    getNowPlaying() {
      const headers = this.getHeaders();
      return this.http.get(`${apiUrl}/movie/now_playing`,{
      headers: headers})
    }

    getPopular() {
      const headers = this.getHeaders();
      return this.http.get(`${apiUrl}/movie/popular`,{
      headers: headers})
    }

    getTopRated() {
      const headers = this.getHeaders();
      return this.http.get(`${apiUrl}/movie/top_rated`,{
      headers: headers})
    }

    getUpcoming() {
      const headers = this.getHeaders();
      return this.http.get(`${apiUrl}/movie/upcoming`,{
      headers: headers})
    }

    getMovieByID (movieId: number){
      const headers = this.getHeaders();
      return this.http.get(`${apiUrl}/movie/${movieId}?language=pt-BR`,{
      headers: headers})
    }

    getMovieCredits (movieId: number){
      const headers = this.getHeaders();
      return this.http.get(`${apiUrl}/movie/${movieId}/credits?language=pt-BR`,{
      headers: headers})
    }

    getSimilarMovies (movieId: number){
      const headers = this.getHeaders();
      return this.http.get(`${apiUrl}/movie/${movieId}/similar?language=pt-BR&page=1`,{
      headers: headers})
    }

    getLatest (){
      const headers = this.getHeaders();
      return this.http.get(`${apiUrl}/movie/latest`,{
      headers: headers})
    }

    getSearch (movieName : string){
      const headers = this.getHeaders()
      return this.http.get(`${apiUrl}/search/movie?query=${movieName}&include_adult=false&language=pt-BR`,{
      headers: headers})

    }
      
    getHeaders (){
      let headers = new HttpHeaders();
      headers = headers.append('accept','application/json')
      headers = headers.append('Authorization', 'Bearer ' + acessToken)
      

      return headers
    }

    getFullImageUrl(posterPath: String) : String{
      return imgUrl + posterPath
     }
}
