import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { CatsService } from "./cats.service";

import { Cat } from "./cat.interface";

@Component({
  selector: "cats-counter",
  template: `
    <span>Number of cat votes: {{ count$ | async }}</span>
  `
})

export class CatsCounterComponent implements OnInit {
  count$: Observable<number>;

  constructor(private _catsService: CatsService) {}

  ngOnInit() {
    this.count$ = this._catsService.count$;
  }
}
