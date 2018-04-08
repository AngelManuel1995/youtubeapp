import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import 'rxjs/Rx';
@Injectable()

export class YouTubeService{

	private youtubeUrl:string = "https://www.googleapis.com/youtube/v3";
	private apiKey:string = "AIzaSyBDJkIENEJbIrL5wOYvv_VJy0zuB-k3Vns";
	private playlist:string = 'UUOJHr_SvK4HsYnYLXCn4ifQ';
	private nextPageToken:string = "";

	constructor(private _http:Http){
			
	}
	
	getVideos(){

		let url = `${this.youtubeUrl}/playlistItems`;
		let params = new URLSearchParams();
		params.set('part','snippet');
		params.set('maxResults','10');
		params.set('playlistId',this.playlist);
		params.set('key',this.apiKey);

		if(this.nextPageToken){
			params.set('pageToken',this.nextPageToken);
		}

		return this._http.get( url, { search:params }).map( res => {
			this.nextPageToken = res.json().nextPageToken;
			let videos:any[] = [];
			for(let video of res.json().items){
				let snippet = video.snippet;
				videos.push(snippet);
			}
			console.log(res.json());
			return(videos);
		})
	}
}