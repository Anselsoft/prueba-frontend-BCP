import { Component, OnInit, Input } from '@angular/core';

import { Agency } from '../agencies/agency'

@Component({
  selector: 'bcp-agency',
  template: `
    <a routerLink="/detail/{{agency.agencia}}">
      <div class="agency-item" id={{agency.agencia}}>
        <div class="agency-item-image">
            <img src="assets/Agencia.jpg" alt="Agencia">
        </div>
        <div class="agency-item-info">
          <h3>{{agency.agencia}}</h3>
          <span class="agency-item-info-city">{{agency.departamento}}</span>
          <div class="agency-item-info-direction">
              <img class="agency-item-info-direction-icon"src="assets/location-icon.png" alt="Map">
              <span class="agency-item-info-direction-text">{{agency.direccion}}</span>
          </div>
        </div>
      </div>
    </a>
  `,
  styleUrls: ['./agency.component.css']
})
export class AgencyComponent implements OnInit {

  @Input() agency: Agency;

  constructor() { }

  ngOnInit(): void {
  }

}
