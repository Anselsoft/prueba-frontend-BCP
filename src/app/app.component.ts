import { Component, OnInit } from '@angular/core';
import agenciesJSON from './agencies-data.json';
import { NgxSpinnerService } from 'ngx-spinner';

import { RouterOutlet } from '@angular/router';
import { slider } from './route-animations'

@Component({
  selector: 'bcp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    slider
  ]
})
export class AppComponent implements OnInit {
  title = 'prueba-frontend-BCP';

  constructor(private spinner: NgxSpinnerService) {
    this.init_localstorage();
  }

  ngOnInit(){
    this.spinner.show();
    setTimeout(() => {
        this.spinner.hide();
    }, 1000);
  }

  init_localstorage(){

    if(localStorage.getItem("agencies")) {
    
      let agencies = localStorage.getItem("agencies");
    
    }else {

      localStorage.setItem("agencies",JSON.stringify(agenciesJSON));

      let agencies = localStorage.getItem("agencies");
    }

  }


  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
