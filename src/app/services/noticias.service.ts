import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ResponseTopHeadlines } from '../intefaces/interfaces';
import { environment } from '../../environments/environment';

const apiUrl = environment.apiUrl;
const apiKey = environment.apiKey;
const headers = new HttpHeaders({
  'X-Api-key': apiKey
});

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  topHeadlinesPage =0;
  constructor(private http: HttpClient) { }

  private ejecutarQuery<T>(query: string){
    query = apiUrl + query;
    return this.http.get<T>( query, { headers })
  }

  getTopHeadlines(){
    this.topHeadlinesPage ++;
    return this.ejecutarQuery<ResponseTopHeadlines>(`/top-headlines?country=ar&page=${this.topHeadlinesPage}`);
  }

  getTopHeadlinesCategory(categoria: string){
    return this.ejecutarQuery<ResponseTopHeadlines>(`/top-headlines?country=ar&category=${categoria}`)

  }
}
