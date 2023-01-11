import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";

const APP_ROUTES : Routes = [
    { path: '', component: AppComponent },
    { path: ':id', component: AppComponent },
    { path: '**', pathMatch: 'full', component: AppComponent }
];

export const APP_ROUTING = RouterModule.forRoot( APP_ROUTES );