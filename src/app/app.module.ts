import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { MethodLinksComponent } from './method-links/method-links.component';
import { FiltermethodComponent } from './filtermethod/filtermethod.component';
import { SortmethodComponent } from './sortmethod/sortmethod.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ContentComponent,
    MethodLinksComponent,
    FiltermethodComponent,
    SortmethodComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
