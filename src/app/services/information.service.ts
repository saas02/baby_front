import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable()

export class InformationService {

  endpointUrl:string = environment.routes.base
  endpoint:string = this.endpointUrl+environment.routes.url+environment.routes.users;  
  information:any;
  informationGeneric:any;

  constructor( private http: HttpClient ) {
    this.information = {};
  }

  getDataUser(id:string){    
    return this.http.get(`${this.endpoint}/${id}`);
  }

  getJsonData(data:object){
    let usuariosData = JSON.parse(JSON.stringify(data));
    let information = usuariosData;  
    if(usuariosData.total){
      usuariosData.users.forEach((user : any) => {
        if(user.id === 'generic'){
          information = user.user;   
        }      
      })
    }
    
    return information.user;
  }
}
