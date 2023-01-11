import { Component, Input } from '@angular/core';
import { InformationService } from './services/information.service';
import { Information } from './interfaces/information';
import { ActivatedRoute } from '@angular/router';

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
    private InformationService:InformationService,
    private activatedRoute: ActivatedRoute
  ){
    this.load = true;
    this.Information = {};  
    this.activatedRoute.queryParams.subscribe((params) => {      
      let id = (params['id']) ? params['id'] : null;
      this.Information = this.InformationService.getData(id);                 
    });
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
