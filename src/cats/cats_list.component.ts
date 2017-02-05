import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { CatsService } from "./cats.service";

import { Cat } from "./cat.interface";

@Component({
  selector: "cats-list",
  template: `
    <ul>
      <li *ngFor="let cat of (cats$ | async)" [class.older]="cat.age > 30">
        <span>Name: {{ cat.name }},  Age: {{ cat.age }}, Color: {{ cat.color }}</span>
        <span> --- Votes: {{ cat.votes }}</span>
        <button (click)="voteCat(cat)">Vote</button>
      </li>
    </ul>
  `,
  styles: [`
    li {
      color: green;
    }
    li.older {
      color: red;
    }
  `]
})

export class CatsListComponent implements OnInit {
  cats$: Observable<Cat[]>;

  constructor(private _catsService: CatsService) {}

  ngOnInit() {
    this.cats$ = this._catsService.cats$;
  }

  voteCat(cat: Cat): void {
    this._catsService.voteCat$.next(cat);
  }
}
