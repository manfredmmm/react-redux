import { Component, Input } from "@angular/core";

@Component({
  selector: "cat-input",
  template: `
    <br>
    <label>Insert name</label>
    <input type="text" [(ngModel)]="name">
    <span>Name: {{ name }}</span>
  `
})

export class CatInputComponent {
  @Input() name: string;
}

