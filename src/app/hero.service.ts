import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Hero } from './interfaces/hero';
import { HEROES } from './moch-heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    return heroes;
  }
}
