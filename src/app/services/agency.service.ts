import { Injectable } from '@angular/core';

import { Agency } from '../agencies/agency';

@Injectable({
    providedIn: 'root'
})

export class AgencyService {

    agencies: Agency[];

    constructor(){
        this.agencies = [
            {
            agencia: "No agency",
            distrito: "n/a",
            provincia: "n/a",
            departamento: "no city",
            direccion: "No direction",
            lat: -73.240647,
            lon: -3.731367
            },

        ]
    }

    getAgency( id: string ) {

        for(let i = 0; i<this.agencies.length; i++) {
            if (id == this.agencies[i].agencia) {
                return this.agencies[i];
            }
        }

    }


    getAgencies() {

        if(localStorage.getItem('agencies') === null) {

            return this.agencies;
        
        } else {

            this.agencies = JSON.parse(localStorage.getItem('agencies'));
            return this.agencies;

        }
    }

    updateAgency(agency: Agency) {

        for(let i = 0; i<this.agencies.length; i++) {
            if (agency.agencia == this.agencies[i].agencia) {
                this.agencies[i] = {
                    agencia : agency.agencia,
                    distrito: agency.distrito,
                    provincia: agency.provincia,
                    departamento: agency.departamento,
                    direccion: agency.direccion,
                    lat: agency.lat,
                    lon: agency.lon,
                }
            }
        }

        localStorage.setItem('agencies',JSON.stringify(this.agencies));

    }
}

