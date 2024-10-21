import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CharacterApiResponse } from '../api_responses/characterapiresponse';
import { CharactersService } from '../characters.service';

@Component({
  selector: 'characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {
  characterCall: CharacterApiResponse;
  pages: number[];
  currentPage = 1;
  searchTerm = '';

  constructor(
    private charactersService: CharactersService,
    private route: ActivatedRoute) { }
    isActive: boolean = false;
    private router: Router // JF Add router n/a

  ngOnInit() {

      
var input = document.getElementById("input-search");

//JF Keyboard enter Function
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("SearchBtn").click();
  }
});
    this.route.queryParams
      .subscribe(params => {

      //console.log('Query Params:', params);

        if (params.fromPage) {
          this.currentPage = Number(params.fromPage);
          if (Number.isNaN(this.currentPage)) { this.currentPage = 1; }
        }
        if (params.nameSearch) { this.searchTerm = params.nameSearch; }

        this.getCharacters(this.currentPage);

        // const id = Number(params.id); 
        // if (this.router.isActive(`/characters/${id}`, true) &&
        //     params.fromPage === ${id} &&
        //     params.nameSearch === '') {
        //     this.isActive = true;
        // }  way it should have worked of dynamic url bit rusty in Angular Routing.

         
      });
  }
  /// JF call to get data for the table
  getCharacters(page = 1): void {
    this.charactersService.getCharacters(page, this.searchTerm).subscribe(characters => {
      this.characterCall = characters;
      this.fillInPageArray(characters.info.pages);
      this.currentPage = page;
    });
  }

  fillInPageArray(total: number): void {
    this.pages = [] as number[];
   //JF adding counter in less than for only 6 pagnation
    for (let counter = 1; counter <= total && counter <= 6; counter++) {
      this.pages.push(counter);
    }
  }
}
