import { Injectable } from '@angular/core';


@Injectable()
export class NewsService {
    get(url: string): Promise<any> {
        return new Promise((resolve, reject) => {
            var req = new XMLHttpRequest();
            req.open('GET', url);

            req.onload = () => {
                if (req.status === 200) {
                    resolve(req.response);
                } else {
                    reject(Error(req.statusText));
                }
            };

            req.onerror = () => {
                reject(Error('Network Error'));
            };

            req.send();
        });

    }

    getJSON(url: string): Promise<any> {
        return this.get(url).then(JSON.parse).catch(error => {
            console.log('getJSON failed for', url, error);
            throw error;
        });
    }

    getNews(source: string): Promise<any> {
        
        let url = 'https://newsapi.org/v1/articles?source=' + source + '&sortBy=latest&apiKey=ea4831f1563048af8bfa3fd779ea332f';
        
        return this.getJSON(url).then(news => news.articles);
    }
                
}




