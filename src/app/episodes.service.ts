import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EpisodeApiResponse } from './api_responses/episodeapiresponse';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EpisodesService {
  constructor(private http: HttpClient) { }

  //JF get data
  getEpisodes(page = 1): Observable<EpisodeApiResponse> {
    return this.http.get<EpisodeApiResponse>(`${environment.episodesUrl}/?page=${page}`);
  }
}
