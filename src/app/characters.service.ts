import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CharacterApiResponse } from './api_responses/characterapiresponse';
import { Character } from './api_responses/character';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {
  constructor(private http: HttpClient) { }

  getCharacters(page = 1, term = ''): Observable<CharacterApiResponse> {
    return this.http.get<CharacterApiResponse>(`${environment.charactersUrl}/?page=${page}${(term === '') ? '' : '&name=' + term}`);
  }
  getCharacter(id: string): Observable<Character> {
    return this.http.get<Character>(`${environment.charactersUrl}/${id}`);
  }
}
