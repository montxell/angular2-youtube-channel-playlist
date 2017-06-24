import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { YoutubeService } from './services/youtube.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { YoutubeVideoPipe } from './pipes/youtube-video.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    YoutubeVideoPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    YoutubeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
