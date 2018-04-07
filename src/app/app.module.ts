import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

//Locales
//Components
import { HomeComponent }  from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';

//Services
import { YouTubeService } from './services/youtube.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    YouTubeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
