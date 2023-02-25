import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {PageNotFoundComponent} from "../page-not-found/page-not-found.component";
import {ChildAComponent} from "../child-a/child-a.component";
import {ChildBComponent} from "../child-b/child-b.component";
import {FirstComponent} from "../first/first.component";
import {SecondComponent} from "../second/second.component";
import {YourGuardComponent} from "../your-guard/your-guard.component";
import {HeoresComponent} from "../heores/heores.component";

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    ChildAComponent,
    ChildBComponent,
    FirstComponent,
    SecondComponent,
    YourGuardComponent,
    HeoresComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
