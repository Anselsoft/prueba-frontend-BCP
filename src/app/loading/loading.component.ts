import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'bcp-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {

    setTimeout(() => {
      this.router.navigate(['agencies']);
    }, 4000);
  }

}
