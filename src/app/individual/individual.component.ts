import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character } from '../api_responses/character';
import { CharactersService } from '../characters.service';

@Component({
  selector: 'app-individual',
  templateUrl: './individual.component.html',
  styleUrls: ['./individual.component.scss']
})
export class IndividualComponent implements OnInit {
  character: Character;
  isActive: boolean = false; //JF Add switch as no wildcards in this angular version on routing
  constructor(private route: ActivatedRoute, private charactersService: CharactersService) { }
  

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.getCharacter(id);

    //Workaround for active tab :) hack but does the job really should be done from url route on id or onClick event from the page like started below but who is to judge as long as its secure and works.
    const charactersNavElement = document.getElementById("characters-nav");
    charactersNavElement.classList.add("active");

    //JF Adding here to get around wildcardissue
    this.isActive = this.route.snapshot.url[0].path === '/characters/' + id +'?fromPage=1&nameSearch=';
    console.log(id, this.isActive )

  }
    ngOnDestroy() {
    //JF Remove "active" class when leaving the component as its SPA
    const charactersNavElement = document.getElementById("characters-nav");
    charactersNavElement.classList.remove("active");
  }

  getCharacter(id: string): void {
   this.charactersService.getCharacter(id).subscribe(character => {
     this.character = character;
    });
  }
}
