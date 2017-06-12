import { Component, OnInit } from '@angular/core';
import { NewsStorageService } from '../../shared/news-storage.service';
import { Article } from '../article.model';

@Component({
    templateUrl: 'app/news/saved/read-later-list.component.html',
    styles: [`
        .clear-btn {
            margin-top: 30px;
        }
    `]
})

export class ReadLaterListComponent implements OnInit {
    articles: Article[];

    constructor(private newsStorageService: NewsStorageService) {

    }

    ngOnInit() {
        this.updateSavedArticles();
    }

    updateSavedArticles(): void {
        this.articles = this.newsStorageService.getArticles();
    }

    clear(): void {
        this.articles = this.newsStorageService.clearStorage();
    }

}