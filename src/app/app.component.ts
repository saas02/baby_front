import { Component, Input } from '@angular/core';
import { InformationService } from './services/information.service';
import { Information } from './interfaces/information';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'baby_front';
  load = false;

  @Input()
  Information:Information;

  constructor(
    private InformationService:InformationService
  ){
    this.load = true;
    this.Information = this.InformationService.getData();
    console.log(this.Information);
    //this.information = { };
    /*this.InformationService.getData().subscribe(
      data => {
        this.information = this.InformationService.getJsonData(data)
        this.load = false;
        
      }, err => {
        console.log(err);
      }
    );*/
  }
}
