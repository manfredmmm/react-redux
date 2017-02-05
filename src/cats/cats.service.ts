import { Injectable, Inject } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/subject";
import { Http, Response } from "@angular/http";

import { Cat } from "./cat.interface";
import "rxjs/add/operator/map";
import "rxjs/add/operator/scan";
import "rxjs/add/operator/share";
import "rxjs/add/operator/switchMap";
import "rxjs/add/operator/startWith";
import "rxjs/add/operator/do";
import "rxjs/add/observable/of";
import "rxjs/add/observable/combineLatest";

const catReducer = (cats: Cat[], catVoted: Cat) => {
  let index = cats.findIndex(cat => cat.id === catVoted.id);
  let cat = cats[index];
  let newCat = Object.assign({}, cat, {
    votes: cat.votes + 1
  });

  return [
    ...cats.slice(0, index),
    newCat,
    ...cats.slice(index + 1)
  ];
};

@Injectable()
export class CatsService {
  cats$: Observable<Cat[]>;
  count$: Observable<number>;
  voteCat$: Subject<Cat>;

  constructor(private _http: Http, @Inject("API_URL") private _apiUrl: string) {
    this.voteCat$ = new Subject<Cat>();

    this.cats$ = this._http.get(`${this._apiUrl}/cats`).map((res: Response) => res.json())
      .switchMap((initialCats: Cat[]) => {
        return this.voteCat$
          .do((catVoted: Cat) => {
            return this._http.post(`${this._apiUrl}/cats/${catVoted.id}/votes`, {}).subscribe();
          })
          .scan(catReducer, initialCats)
          .startWith(initialCats);
      })
      .share();

    this.count$ = this.cats$.map((cats: Cat[]) => {
      return cats.reduce((acc, cat) => acc + cat.votes, 0);
    });
  }
}