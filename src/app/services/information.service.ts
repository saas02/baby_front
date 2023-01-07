import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()

export class InformationService {

  //endpointUrl:string = "https://pruebanodejs.amarreyamores.com.co"
  endpointUrl:string = "http://localhost:8001"
  endpoint:string = this.endpointUrl+"/v1/api/usuarioscv";  
  endpointPDF:string = this.endpointUrl+"/v1/api/usuarioscv/doc/";

  constructor( private http: HttpClient ) {
    
  }

  getData(){   
    //return this.http.get(this.endpoint);
    return {
      id: "jduijiiojioj",
      name: "Sergio",
      phone: 3167259347,
      confirmation: false,
      visits: 0,
      gifts: "Panales",
      date: new Date(),
      partners: [
        {
          name: "Paola"
        },
        {
          name: "David"
        },
        {
          name: "Paula"
        }
      ]
    }
  }

  getJsonData(data:object){
    let usuariosData = JSON.parse(JSON.stringify(data));
    console.log(usuariosData);
    return (usuariosData.usuarios[0]) ? (usuariosData.usuarios[0]): {};
    
  }
}
