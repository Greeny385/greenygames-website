import { Component, OnInit } from '@angular/core';
import { TwitchEmbed, TwitchEmbedLayout } from 'twitch-player';


@Component({
  selector: 'ngView',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})

export class ViewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    const embed = new TwitchEmbed('twitch-embed', {
      width: "100%",
      height: "100%",
      channel: 'greeny385',
      layout: TwitchEmbedLayout.VIDEO_WITH_CHAT
    });
  }

}
