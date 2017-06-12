import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { NewsService } from '../shared/news.service';


@Injectable()
export class TechCrunchResolver implements Resolve<any> {    
    
    constructor(private newsService: NewsService) {

    }    

    resolve() {
        return this.newsService.getNews('techcrunch').then(news => news);

    }
}