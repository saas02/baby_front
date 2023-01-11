import { Component, Input } from '@angular/core';
import { InformationService } from './services/information.service';
import { Information } from './interfaces/information';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';

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
      if(params['id']){
        this.InformationService.getDataUser(params['id']).subscribe(
          user => {            
            this.Information = this.InformationService.getJsonData(user)            
          }, err => {
            console.log(err);
            this.Information = environment.user;
          }
        );  
      }else{
        this.InformationService.getDataUser('generic').subscribe(
          user => {
            this.Information = this.InformationService.getJsonData(user)            
          }, err => {
            console.log(err);
            this.Information = environment.user;
          }
        );  
      }           
    });    
  }
}
