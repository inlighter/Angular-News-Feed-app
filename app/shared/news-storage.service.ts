import { Injectable } from '@angular/core';
import { Article } from '../news/article.model';


@Injectable()
export class NewsStorageService {
    savedArticles: Article[] = [];
    customNews: Article[] = [];

    saveArticle(article: Article): void {
        this.savedArticles.push(article);
        localStorage.setItem('Read later', JSON.stringify(this.savedArticles));
        
    }

    saveListArticles(articles: Article[]): void {
        this.savedArticles = articles;
        localStorage.setItem('Read later', JSON.stringify(this.savedArticles));
        
    }

    getArticles(): Article[] {        
        return this.savedArticles = JSON.parse(localStorage.getItem('Read later')) || [];
    }

    removeArticle(article: Article): void {
        this.getArticles();
        this.savedArticles = this.savedArticles.filter(news => news.title !== article.title);
        localStorage.setItem('Read later', JSON.stringify(this.savedArticles));
    }

    clearStorage(): Article[] {
        this.savedArticles.length = 0;
        localStorage.removeItem('Read later');
        return this.savedArticles;
    }

    addCustomNews(article: Article) {        
        this.customNews.push(article);
        this.updateCustomStorage();        
    }

    getCustomNews(): Article[] {                
        return this.customNews = JSON.parse(localStorage.getItem('Custom News')) || [];
    }

    removeCustomArticle(article: Article): void {
        this.getCustomNews();
        this.customNews = this.customNews.filter(news => news.title !== article.title)
        this.updateCustomStorage();
    }

    updateCustomStorage(): void {
        localStorage.setItem('Custom News', JSON.stringify(this.customNews));
    }

    clearCustomStorage(): Article[] {
        this.customNews.length = 0;
        localStorage.removeItem('Custom News');
        return this.customNews;
    }

    
}


