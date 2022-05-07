import { Component, OnInit } from '@angular/core';
import { NewsService } from '../services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {
  newsData:any = [];
  constructor(private newsService: NewsService) { }

  //On the page open gets all information fron the json file
  ngOnInit() {
    this.newsService.GetNewsData().subscribe(
      (data) => {
        this.newsData = data.articles;
        console.log(this.newsData);
      }
    );
  }
}
