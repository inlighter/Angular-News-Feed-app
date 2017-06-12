import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { NewsService } from '../shared/news.service'

@Injectable()
export class TheNextWebResolver implements Resolve<any> {
    constructor(private newsService: NewsService) {

    }
    resolve() {
        return this.newsService.getNews('the-next-web').then(news => news);

    }
}
