import { Component, OnInit } from '@angular/core';
import { Agency } from '../agencies/agency';
import { AGENCIES } from '../DataAgencies/data-agencias';
import { AgencyService } from '../services/agency.service';

@Component({
  selector: 'bcp-agencies',
  templateUrl: './agencies.component.html',
  styleUrls: ['./agencies.component.css']
})
export class AgenciesComponent implements OnInit {

  agencies = AGENCIES;
  agencyList: Agency[];
  selectedAgency: Agency;

  constructor(public agencyService: AgencyService) {
    
  }

  ngOnInit(): void {

    this.agencyList = this.agencyService.getAgencies();

  }

  onSelect(agency: Agency): void{
    this.selectedAgency = agency;
  }

  

}
