import { Component, OnInit } from '@angular/core';
import { Variable } from '@angular/compiler/src/render3/r3_ast';

@Component({
  selector: 'app-web-player',
  templateUrl: './web-player.component.html',
  styleUrls: ['./web-player.component.css']
})
export class WebPlayerComponent implements OnInit {

  SourceUrl: string;
  Name: string;
  AudioImageUrl: string;
  radio = new Audio();
  constructor() {  }

  ngOnInit() {
    this.Name = "People's Radio";
    this.radio.src = "http://" + "s3.myradiostream.com/14498/listen.mp3";
    this.AudioImageUrl = "https://www.facebook.com/peoplesradiofm/photos/a.1466056110373678/1784870768492209/?type=1&theater";
  }

  PlayOrPause(){
    if(this.radio.paused){
      this.radio.play();
    }
    else{
      this.radio.pause();
    }
  }
}
