import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { FiltermethodComponent } from './filtermethod/filtermethod.component';
import { SortmethodComponent } from './sortmethod/sortmethod.component';
import { SomeMethodComponent } from './some-method/some-method.component';
import { EveryMethodComponent } from './every-method/every-method.component';
import { MapMethodComponent } from './map-method/map-method.component';
import { FindMethodComponent } from './find-method/find-method.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ContentComponent,
    FiltermethodComponent,
    SortmethodComponent,
    SomeMethodComponent,
    EveryMethodComponent,
    MapMethodComponent,
    FindMethodComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
