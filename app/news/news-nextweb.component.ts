import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NewsStorageService } from '../shared/news-storage.service';
import { Article } from './article.model'; 

@Component({
    selector: 'news-nextweb',
    template: `
    <div *ngIf="news?.title" class="well hoverwell thumbnail story" >
        
        <a *ngIf="news?.urlToImage" [routerLink]="['/detailed/the-next-web', news.title]" 
        class="story-image" [ngStyle]="{'background-image': 'url(' + news.urlToImage+')'}"></a>
        <a [routerLink]="['/detailed/the-next-web', news.title]"><h4>{{ news?.title }}</h4></a>        
                
        <button *ngIf="!isSaved" class="btn btn-primary story-btn" (click)="save(news) " 
        [disabled]="readLater === 'Saved'">{{ readLater }}</button>
        <button *ngIf="isSaved" class="btn btn-primary story-btn" (click)="removeOnClick(news)" >Remove</button>
    </div>
    `,
    styleUrls: ['app/news/news-thumbnail.component.css']
})

export class NewsNextWebComponent {
    @Input() news: Article;
    @Input() isSaved: boolean;
    @Output() eventClick = new EventEmitter();
    readLater: string = 'Read later'; 
    constructor(private newsStorage: NewsStorageService) {

    }   

    save(article: Article): void {
        this.readLater = 'Saved';        
        this.newsStorage.saveArticle(article);
    }
    
    removeOnClick(article: Article): void {
        this.remove(article);
        this.eventClick.emit();
    }

    remove(article: Article): void {
        this.newsStorage.removeArticle(article);
    }

}