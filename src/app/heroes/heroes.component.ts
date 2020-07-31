import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  selectedHero: Hero;
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };

  heroes = HEROES;

  constructor() { }

  onSelected(hero: Hero): void{
    this.selectedHero = hero;
  }

  ngOnInit(): void {
  }

}
