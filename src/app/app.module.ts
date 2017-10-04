import { environment } from './../environments/environment';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule } from '@angular/forms';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from '../app/routes/app.routng.module';
import {CommonModule} from '@angular/common';
import { HttpModule } from '@angular/http';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import {MaterialModule} from '@angular/material';
import {FlexLayoutModule } from '@angular/flex-layout';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FilterPipe } from './filter.pipe';
import { DataService } from './data.service';
import 'hammerjs';


@NgModule({

  imports: [
    BrowserModule,
    CommonModule,
    HttpModule,
    FormsModule,
    MaterialModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],

  declarations: [AppComponent,
                HomeComponent,
                AboutComponent,
                FilterPipe
  ],
  bootstrap: [AppComponent],
  providers: [DataService]
})
export class AppModule { }
