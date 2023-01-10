import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { VideoComponent } from './component/video/video.component';
import { MessageComponent } from './component/message/message.component';
import { InformationComponent } from './component/information/information.component';
import { FooterComponent } from './component/footer/footer.component';
import { registerLocaleData } from '@angular/common';

import { InformationService } from './services/information.service';

import localeEsCo from '@angular/common/locales/es-CO';
import { TransformdataPipe } from './pipes/transformdata.pipe';
import { SafePipe } from './pipes/safe.pipe';

registerLocaleData(localeEsCo, 'es-CO');

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    VideoComponent,
    MessageComponent,
    InformationComponent,
    FooterComponent,
    TransformdataPipe,
    SafePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    InformationService,
    { provide: LOCALE_ID, useValue: 'es-CO' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
