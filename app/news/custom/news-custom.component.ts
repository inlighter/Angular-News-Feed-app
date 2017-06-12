import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { NewsStorageService } from '../../shared/news-storage.service';
import { Article } from '../article.model';

@Component({
    selector: 'news-custom',
    template: `
    <div *ngIf="news?.title" class="well hoverwell thumbnail story" >        
        <div class="custom-title">
        <a [routerLink]="['/detailed/custom', news.title]"><h4>{{ news?.title }}</h4></a> 
        </div>       
        <button *ngIf="!isSaved" class="btn btn-primary story-btn" (click)="save(news) " 
        [disabled]="isInStorage(news)">{{ isInStorage(news) ? 'Saved' : 'Read later' }}</button>
        <button *ngIf="isSaved" class="btn btn-primary story-btn" (click)="removeOnClick(news)" >Remove</button>
    </div>
    `,
    styleUrls: ['app/news/custom/news-custom-thumbnail.component.css']
})

export class NewsCustomComponent implements OnInit {
    savedArticles: Article[];
    

    @Input() news: Article;
    @Input() isSaved: boolean;
    @Output() eventClick = new EventEmitter();
    constructor(private newsStorageService: NewsStorageService) {

    }

    ngOnInit() {
        this.savedArticles = this.newsStorageService.getArticles();
    }

   isInStorage(article: Article): boolean {
        return !!this.savedArticles.find(val => val.title === article.title);
   }
    

    save(article: Article): void {
               
        this.newsStorageService.saveArticle(article);
        this.savedArticles = this.newsStorageService.getArticles();
    }
    
    removeOnClick(article: Article): void {
        this.remove(article);
        this.eventClick.emit();
    }

    remove(article: Article): void {
        this.newsStorageService.removeArticle(article);
    }
}