// tabs.component.ts
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
})
export class TabsComponent {

  constructor(private router: Router, private route: ActivatedRoute) {}

  characterPage: number = 1; 
  characterNameSearch: string = ''; 

  isActive(route: string): boolean {
    // const id = this.route.snapshot.firstChild?.paramMap.get('id');
    // const queryParams = this.route.snapshot.queryParams;

    // if (
    //   route === '/characters' &&
    //   id === null && 
    //   queryParams.fromPage === '1' &&
    //   queryParams.nameSearch === ''
    // ) {
    //   return true;
    // }

    return this.router.isActive(route, true);
  }   
}