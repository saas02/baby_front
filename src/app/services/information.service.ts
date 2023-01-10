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
      confirmation: null,
      visits: 0,
      gifts: "Panales",
      date: new Date(),
      address: "Cra 89D # 32 15 Sur",
      video: "http://player.vimeo.com/video/4749536",
      latitude: 4.635517934252235,
      longitude: -74.14845602276542,
      partners: [
        {
          name: "Paola"
        },
        {
          name: "David"
        },
        {
          name: "Paula"
        },
        {
          name: "Rene"
        },
        {
          name: "Martha"
        },
        {
          name: "Milena"
        },
        {
          name: "Tobby"
        },
        {
          name: "Medu"
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
