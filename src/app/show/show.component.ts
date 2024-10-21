import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RSVService } from '../rsv.service';
@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  constructor(private rsv: RSVService, private router: Router) { }

  ngOnInit() {
  }
  list() {
    this.router.navigate(['login-list']);
  }
  Event() {
    this.router.navigate(['Event']);
  }
  Session() {
    this.router.navigate(['Session']);
  }
  Speaker() {
    this.router.navigate(['Speaker']);
  }
  onBack() {
    this.router.navigate(['calendardemo']);
  }
}
