import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Agency } from '../agencies/agency';
import { AgencyService } from '../services/agency.service'

@Component({
  selector: 'bcp-agency-detail',
  templateUrl: './agency-detail.component.html',
  styleUrls: ['./agency-detail.component.css']
})
export class AgencyDetailComponent implements OnInit {

  agencyDetail: Agency;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, public agencyService: AgencyService) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      const id = params.get("id")
      this.agencyDetail = this.agencyService.getAgency(id)
    })
  }

  updateAgency(agencia,distrito,provincia,departamento,direccion,latitud,longitud) {
    let agency : Agency = {
      agencia: agencia.value,
      distrito: distrito.value,
      provincia: provincia.value,
      departamento: departamento.value,
      direccion: direccion.value,
      lat: parseFloat(latitud.value),
      lon: parseFloat(longitud.value)

    }

    let noErrors = true;

    try {

      this.agencyService.updateAgency(agency);

      
    } catch (error) {

      noErrors = false;

      console.log(error);
      
    }

    if(noErrors) {
      this.router.navigateByUrl('/success');
    } else {
      this.router.navigateByUrl('/failed');
    }

    return false;
  }

}
