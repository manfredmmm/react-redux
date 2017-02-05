import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { CatsService } from "./cats/cats.service";

import { CatsModule } from "./cats/cats.module";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header.component";

@NgModule({
  imports: [
    BrowserModule,
    CatsModule
  ],
  exports: [

  ],
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  providers: [
    CatsService,
    { provide: "API_URL", useValue: "http://localhost:3000" }
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}