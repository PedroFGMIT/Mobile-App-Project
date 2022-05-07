import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private httpClient:HttpClient) { }

  //Reads in json data from an external url
  GetNewsData():Observable<any>{
    return this.httpClient.get('https://newsapi.org/v2/everything?q=galway&from=2022-04-07&sortBy=publishedAt&apiKey=e59f8fcfd5964571829d3972eb1110a8');
  }
}
