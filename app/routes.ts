import { Routes } from '@angular/router';

import {
    NewsListComponent,
    TechRadarDetailsComponent,
    TechCrunchDetailsComponent,
    TheNextWebDetailsComponent,
    CustomDetailsComponent,
    NewsCustomListComponent,
    TechRadarResolver,
    TechCrunchResolver,
    TheNextWebResolver
} from './news/index';

import { ReadLaterListComponent } from './news/saved/read-later-list.component';
import { CreateNewsComponent } from './news/create/create-news.component';




export const appRoutes: Routes = [
    { path: '', redirectTo: '/news', pathMatch: 'full'},
    { path: 'news', component: NewsListComponent, resolve: {articles: TheNextWebResolver} },
    { path: 'news/:id', component: NewsCustomListComponent},
    { path: 'saved', component: ReadLaterListComponent},
    { path: 'create', component: CreateNewsComponent},  
    { path: 'custom', component: NewsCustomListComponent},  
    { path: 'detailed/techradar/:title', component: TechRadarDetailsComponent, resolve: {articles: TechRadarResolver} },
    { path: 'detailed/techcrunch/:title', component: TechCrunchDetailsComponent, resolve: {articles: TechCrunchResolver} },
    { path: 'detailed/the-next-web/:title', component: TheNextWebDetailsComponent, resolve: {articles: TheNextWebResolver} },
    { path: 'detailed/custom/:title', component: CustomDetailsComponent }
    
]