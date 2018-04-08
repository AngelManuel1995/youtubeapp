import { Component } from "@angular/core";
import { YouTubeService } from '../../services/youtube.service';
declare var $:any;
@Component({
  selector:"app-home",
  templateUrl:"./home.component.html"
})

export class HomeComponent{

  videos:any[] = [];
  selectedVideo:any;
  constructor(private _youTubeService:YouTubeService){
    this._youTubeService.getVideos()
      .subscribe( videos => this.videos = videos);
  }

  loadMore(){
    this._youTubeService.getVideos()
    .subscribe( videos => this.videos.push.apply(this.videos, videos));
  }

  showVideo(video){
    this.selectedVideo = video;
    $('#myModal').modal();
  }
  closeModal(){
    this.selectedVideo = null;
    $('#myModal').modal('hide');
  }
}
