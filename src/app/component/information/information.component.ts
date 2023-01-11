import { Component, AfterViewInit, Input } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import { Information } from 'src/app/interfaces/information';
import { environment } from 'src/environments/environment';
import * as L from 'leaflet';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})

export class InformationComponent implements AfterViewInit {

  @Input()
  Information: Information;
  map: any;

  constructor() {
    this.Information = {};
  }

  public ngAfterViewInit(): void {
    console.log(this.Information);
    if (this.Information.latitude && this.Information.longitude) {      
      this.loadMap(this.Information.latitude, this.Information.longitude);
    }
  }

  changeDecision(){
    console.log("decision");
  }

  private getCurrentPosition(): any {
    return new Observable((observer: Subscriber<any>) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position: any) => {
          observer.next({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
          observer.complete();
        });
      } else {
        observer.error();
      }
    });
  }

  private loadMap(latitude: number, longitude: number): void {
    this.map = L.map('map').setView([latitude, longitude], 10);

    const icon = L.icon({
      iconUrl: 'assets/images/marker-icon.png',
      shadowUrl: 'assets/images/marker-shadow.png',
      popupAnchor: [13, 0],
    });

    const marker = L.marker([latitude, longitude], { icon }).bindPopup('Te esperamos');
    marker.addTo(this.map).openPopup();
    this.map.flyTo([latitude, longitude], 13)

    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
      maxZoom: 18,
      id: 'mapbox/streets-v11',
      tileSize: 512,
      zoomOffset: -1,
      accessToken: environment.mapbox.accessToken,
    }).addTo(this.map).openPopup();

    this.getCurrentPosition()
      .subscribe((position: any) => {
        const marker = L.marker([position.latitude, position.longitude], { icon }).bindPopup('Tú Ubicación');
        marker.addTo(this.map);
      });
  }

}
