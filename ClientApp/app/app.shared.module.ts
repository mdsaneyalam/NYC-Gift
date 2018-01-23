import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app/app.component';
import { HomeComponent } from './components/home/home.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { StoreService } from "./Services/store.service";

@NgModule({
    declarations: [
        AppComponent,
        FetchDataComponent,
        HomeComponent,
        SidebarComponent,
        FooterComponent
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: 'dashboard', component: HomeComponent },
            { path: 'fetchdata', component: FetchDataComponent },
            { path: '**', redirectTo: 'dashboard' }
        ])
    ],
    providers: [
        StoreService
    ]
})
export class AppModuleShared {
}
