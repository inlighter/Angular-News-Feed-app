import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Article } from '../article.model';

@Component({
    templateUrl: '/app/news/news-details/techradar-details.component.html',
    styles: [
        `
        .article-content {
            font-size: 1.25em;
            line-height: 1.5em;
            margin-top: 1em;
        }
        .info {
            color: darkgray;
        }
        .thumbnail {
            padding: 30px;
            cursor: auto;
        }
        img {
            padding-bottom: 20px;
        }
        a {
            text-decoration: none;
        }
        `
    ]
})

export class TechRadarDetailsComponent implements OnInit {
    article: Article;
    title: string;
   
    constructor(private route: ActivatedRoute) {

    }

    ngOnInit() {
        this.title = this.route.snapshot.params['title'];        
        this.article = this.route.snapshot.data['articles'].find(news => news.title === this.title);

        
    }

}