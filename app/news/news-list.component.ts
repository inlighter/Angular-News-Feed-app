import { Component, OnInit } from '@angular/core';
import { NewsService } from '../shared/news.service';
import { NewsStorageService } from '../shared/news-storage.service';
import { ActivatedRoute } from '@angular/router';
import { Article } from './article.model';

@Component({

    template: `
    <div class="container">
    
    <button class="btn btn-default" [class.active]="articleSource === 'The Next Web News'"  
    (click)="getArticles('the-next-web')">The Next Web</button>
    <button class="btn btn-default" [class.active]="articleSource === 'Tech Radar News'" 
    (click)="getArticles('techradar')" >Tech Radar</button>
    <button class="btn btn-default" [class.active]="articleSource === 'Tech Crunch News'" 
    (click)="getArticles('techcrunch')">Tech Crunch</button>    
        
        <h1>{{articleSource | uppercase}}</h1>
        <hr>
        <div class="row">
            <div class="col-md-4 col-sm-6" *ngFor="let article of articles">                
                <news-nextweb *ngIf="article.source === 'the-next-web'"  [news]="article"></news-nextweb>
                <news-techradar *ngIf="article.source === 'techradar'"  [news]="article" ></news-techradar>
                <news-techcrunch *ngIf="article.source === 'techcrunch'"  [news]="article"></news-techcrunch>
                
            </div>
        </div>
    </div>
    `
})

export class NewsListComponent implements OnInit {
    articles: Article[];
    articleSource: string = 'The Next Web';
    savedArticles: Article[];
    constructor(private newsStorageService: NewsStorageService, private newsService: NewsService, private route: ActivatedRoute) {

}
    ngOnInit() {

        this.getSavedArticles(); 

        let tempArticles = this.route.snapshot.data['articles'];
        tempArticles = this.updateArticlesSource('the-next-web', tempArticles);
        this.filterArticles(tempArticles);

    }

    updateArticlesSource(source: string, articles: Article[]): Article[] {
        if (source === 'the-next-web') {
            this.articleSource = 'The Next Web News';
        } else if (source === 'techradar') {
            this.articleSource = 'Tech Radar News';
        } else if (source === 'techcrunch') {
            this.articleSource = 'Tech Crunch News';
        }

        articles.forEach(val => val.source = source);
        return articles;

    }

    getSavedArticles(): void {
        this.savedArticles = this.newsStorageService.getArticles(); 
    }

    filterArticles(temp: Article[]) {
        for (let i = 0; i < this.savedArticles.length; i++) {
            temp = temp.filter(news => news.title !== this.savedArticles[i].title);
        }
        this.articles = temp; 
    }

    getArticles(source: string): void {
        
        this.getSavedArticles();
        this.newsService.getNews(source).then(news => {
            let tempArticles = this.updateArticlesSource(source, news);
            this.filterArticles(tempArticles);

        });

    }
}
