import { Component, OnInit } from '@angular/core';
import { Hero } from '../../interfaces/hero';
import { HEROES } from '../../moch-heroes';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };

  heroes =HEROES;
  constructor() { }

  ngOnInit(): void {
  }

}