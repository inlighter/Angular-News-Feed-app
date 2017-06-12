import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import {
  NewsListComponent,
  NewsNextWebComponent,
  NewsTechRadarComponent,
  NewsTechCrunchComponent,
  TechRadarResolver,
  TechCrunchResolver,
  TheNextWebResolver,
  TheNextWebDetailsComponent,
  TechRadarDetailsComponent,
  TechCrunchDetailsComponent,
  CustomDetailsComponent,
  NewsCustomComponent,
  NewsCustomListComponent
} from './news/index';

import { NavBarComponent } from './nav/navbar.component';
import { ReadLaterListComponent } from './news/saved/read-later-list.component';
import { CreateNewsComponent } from './news/create/create-news.component';
import { NewsService } from './shared/news.service';
import { NewsStorageService } from './shared/news-storage.service';
import { appRoutes } from './routes';


@NgModule({
  imports:      [ 
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule ],
  declarations: [ 
    AppComponent,
    NewsListComponent, 
    NewsNextWebComponent, 
    NewsTechRadarComponent, 
    NewsTechCrunchComponent, 
    NavBarComponent,
    TheNextWebDetailsComponent,
    TechRadarDetailsComponent,
    TechCrunchDetailsComponent,
    ReadLaterListComponent,
    NewsCustomComponent,
    CreateNewsComponent,
    NewsCustomListComponent,
    CustomDetailsComponent
     ],
  bootstrap:    [ AppComponent ],
  providers: [
    NewsService, 
    NewsStorageService,
    TheNextWebResolver, 
    TechRadarResolver, 
    TechCrunchResolver]
})
export class AppModule { }
