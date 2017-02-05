import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";

import { CatsListComponent } from "./cats_list.component";
import { CatsCounterComponent } from "./cats_counter.component";
import { CatInputComponent } from "./cat_input.component";

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    FormsModule
  ],
  exports: [
    CatsListComponent,
    CatsCounterComponent,
    CatInputComponent
  ],
  declarations: [
    CatsListComponent,
    CatsCounterComponent,
    CatInputComponent
  ],
  providers: [
  ]
})
export class CatsModule {}