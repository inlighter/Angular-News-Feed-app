import { Component } from '@angular/core';
import { NewsStorageService } from '../../shared/news-storage.service';
import { Router } from '@angular/router';
import { Article } from '../article.model';

@Component({
    selector: 'create-news',
    templateUrl: 'app/news/create/create-news.component.html',
    styles: [`
    textarea {
        height: 450px;
    }
    `]
})

export class CreateNewsComponent {
    customArticle: Article  = {
        author: 'Administrator',
        title: '',
        url: '',
        text: '',
        source: 'custom',        
        publishedAt: new Date()

    };

    

    constructor(private newsStorageService: NewsStorageService, private router: Router) {

    }

    add(data: {title: string, article: string}): void {
        let title = data.title.trim();
        let article = data.article.trim();
        if (title && article) {
            this.customArticle.title = title;
            this.customArticle.text = article;
            this.customArticle.publishedAt = new Date();
            this.customArticle.url = window.location.hostname + '/detailed/custom/' + title;
            this.newsStorageService.addCustomNews(this.customArticle);
            this.router.navigate(['/custom']);
            
        }
        
        
    }

    cancel(): void {
        this.router.navigate(['/news']);
    }

}