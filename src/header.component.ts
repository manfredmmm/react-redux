import { Component, Input } from "@angular/core";

@Component({
  selector: "header",
  template: `
    <h2>{{ title }}</h2>
    <button (click)="changeTitle('manfred')">Change</button>
  `
})

export class HeaderComponent {
  @Input() title: string;

  changeTitle(name: string): void {
    this.title = `AngularJS rocks! And ${name} is da best!`;
  }
}
