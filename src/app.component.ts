import { Component } from "@angular/core";

@Component({
  selector: "app",
  template: `
    {{ cats | json }}
    <header title="AngularJS"></header>
    <cats-list></cats-list>
    <cats-counter></cats-counter>
    <cat-input name="Manfred"></cat-input>
  `
})
export class AppComponent {}