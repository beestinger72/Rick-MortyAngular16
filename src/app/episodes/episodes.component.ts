import { Component, OnInit } from '@angular/core';
import { EpisodeApiResponse } from '../api_responses/episodeapiresponse';
import { EpisodesService } from '../episodes.service';

@Component({
  selector: 'episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.scss']
})
export class EpisodesComponent implements OnInit {
  episodesCall: EpisodeApiResponse;
  pages: number[];
  currentPage = 1;

  constructor(private episodesService: EpisodesService) { }

  ngOnInit() { 
    
    this.getEpisodes(); 
  
  }

  getEpisodes(results = 1): void { // change to 3 if you wish to start off at page three, however concept is starting at page 1 data which makes userflow sense. 
    this.episodesService.getEpisodes(results).subscribe(episodes => {
      this.episodesCall = episodes;
        //console.log(episodes, "episodes")
      this.fillInPageArray(episodes.info.pages); // Pulling from pages in Json Feed so in theory correct as pages 3 but really why have the pagnation and not muted on thinking this is my data source provided the brief is to conentrate around design :) normal senario i would have gone back to designer or breif and double checked as to users perpective its incomplte they will see that as a bug!.
      //console.log(episodes.info.pages, "amount of pages") //JF :).
      this.currentPage = results;
      //console.log(results, "this page")
    });
  }
  

  fillInPageArray(total: number): void {
    this.pages = [] as number[];
   //JF adding counter in less than for only 6 pagnation
    for (let counter = 1; counter <= 6; counter++) {
      this.pages.push(counter);
    }
  }

  //JF Episode and Data is limited to Characters only 3 to pagnate will add 6 link in concept but really you should be bringing all episodes back.
}
