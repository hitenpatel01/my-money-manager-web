import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'm3-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  currentYear: number;
  constructor() {
    this.currentYear = new Date().getFullYear();
  }

  ngOnInit() {
  }

}
