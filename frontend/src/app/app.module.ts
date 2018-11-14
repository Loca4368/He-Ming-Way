import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { NavigatorComponent } from './components/navigator/navigator.component';
import { HomeComponent } from './components/home/home.component';
import { EventsComponent } from './components/events/events.component';
import { DrinkingComponent } from './components/drinking/drinking.component';
import { DinnerComponent } from './components/dinner/dinner.component';
import { SportsComponent } from './components/sports/sports.component';
import { SurfingComponent } from './components/surfing/surfing.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routerConfig: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'events',
        component: EventsComponent
    },
    {
        path: 'drinking',
        component: DrinkingComponent
    },
    {
        path: 'dinner',
        component: DinnerComponent
    },
    {
        path: 'sports',
        component: SportsComponent
    },
    {
        path: 'surfing',
        component: SurfingComponent
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: '**',
        component: PageNotFoundComponent
    }
];

@NgModule({
    declarations: [
        AppComponent,
        NavigatorComponent,
        HomeComponent,
        EventsComponent,
        DrinkingComponent,
        DinnerComponent,
        SportsComponent,
        SurfingComponent,
        PageNotFoundComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(
            routerConfig,
            { enableTracing: true } // <-- debugging purposes only
        )
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
