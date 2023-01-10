import { Component, OnInit, Input } from '@angular/core';
import { Information } from 'src/app/interfaces/information';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

  @Input()
  Information:Information;

  constructor( ) { 
    this.Information = {};
  }

  ngOnInit(): void {
  }

}
