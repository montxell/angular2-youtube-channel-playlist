import { Component, OnInit } from '@angular/core';

import { YoutubeService } from '../../services/youtube.service';

declare let $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  videos: any[] = [];
  selectedVideo: any;
  

  constructor( public _yts: YoutubeService ) {

    this._yts.getVideos()
        .subscribe( videos => {
          //console.log(videos);
          this.videos = videos;
        });

   }

  ngOnInit() {
  }

  watchVideo( video: any ) {
    this.selectedVideo = video;
    $('#myModal').modal();
  }

  loadMore() {
    this._yts.getVideos()
        .subscribe( videos => {
          this.videos.push.apply(this.videos, videos);
        });
  }

  closeModal() {
    this.selectedVideo = null;
    $('#myModal').modal('hide');
  }

}
