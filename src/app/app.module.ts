import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { VideoComponent } from './component/video/video.component';
import { MessageComponent } from './component/message/message.component';
import { InformationComponent } from './component/information/information.component';
import { FooterComponent } from './component/footer/footer.component';

import { InformationService } from './services/information.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    VideoComponent,
    MessageComponent,
    InformationComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [
    InformationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
