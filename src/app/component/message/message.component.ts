import { Component, OnInit, Input } from '@angular/core';
import { Information } from 'src/app/interfaces/information';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  @Input()
  Information:Information;
  
  constructor() { 
    this.Information = {};
  }

  ngOnInit(): void {
  }

}
