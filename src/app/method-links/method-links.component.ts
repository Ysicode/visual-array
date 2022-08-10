import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-method-links',
  templateUrl: './method-links.component.html',
  styleUrls: ['./method-links.component.scss']
})
export class MethodLinksComponent extends AppComponent {

  constructor() { 
    super();
  }

  override ngOnInit(): void {
  }

}
