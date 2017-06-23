import { Injectable } from '@angular/core';

import { Http, URLSearchParams } from '@angular/http';
import 'rxjs/Rx';


@Injectable()
export class YoutubeService {

  private youtubeUrl: string = "https://www.googleapis.com/youtube/v3"
  private apiKey: string = "AIzaSyCZ-5zd5gcLxX4Ja5L5fFCvHW3vlS5Blno";
  private playlist: string = "UU9zX2xZIJ4cnwRsgBpHGvMg";

  private nextPageToken: string = "";

  constructor( public http: Http ) { }

  getVideos() {

    let url = `${ this.youtubeUrl }/playlistItems`;

    let params = new URLSearchParams();

    params.set( 'part', 'snippet');
    params.set( 'maxResults', '10');
    params.set( 'playlistId', this.playlist);
    params.set( 'key', this.apiKey);

    return this.http.get( url, { search: params } )
            .map( res => {
              console.log( res.json() );
              this.nextPageToken = res.json().nextPageToken;

              let videos: any[] = [];
              for ( let video of res.json().items ) {
                let snippet = video.snippet;
                videos.push(snippet);
              }

              return videos;
              
            });
  }



}
