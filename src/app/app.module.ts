import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';

//Locales
//Components
import { HomeComponent }  from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
//Pipes
import { VideoYoutube } from './pipes/video-youtube.pipe';

//Services
import { YouTubeService } from './services/youtube.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    VideoYoutube
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [
    YouTubeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
