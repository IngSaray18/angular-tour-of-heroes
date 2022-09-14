import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/interfaces/hero';
import { HeroService } from '../../../app/hero.service';
import { MessageService } from '../../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {


  heroes: Hero[] = [];
    constructor(private heroService: HeroService,public messageService: MessageService) { }

  ngOnInit(): void {
    this.getHeroes();
  }
  selectedHero?: Hero;
onSelect(hero: Hero): void {
  this.selectedHero = hero;
  this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
}
getHeroes(): void {
  this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
}
}
