import { Component, OnInit, Input } from '@angular/core';
import { Information } from 'src/app/interfaces/information';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input()
  Information:Information;

  constructor() { 
    this.Information = {};
  }

  ngOnInit(): void {
  }

}
