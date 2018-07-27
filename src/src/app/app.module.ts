import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ClockComponent } from './clock/clock.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ProductsComponent } from './products/products.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { TestComponent } from './test/test.component';
import { FormsModule } from '@angular/forms';
import { ModalDialogComponent } from './modal-dialog/modal-dialog.component';

import { RouterModule } from "@angular/router";
// input to the router module
var routes = [
  {
    path: "products", component: ProductsComponent
  },
  {
    path: "test", component: TestComponent
  },
  {
    path: "feedback", component: FeedbackComponent
  },
  {
    path: "calendar", component: CalendarComponent
  },
  {
    path: "clock", component: ClockComponent
  },
  {
    path: "", redirectTo: "products", pathMatch: "full"
  }

];

@NgModule({
  declarations: [
    AppComponent,
    ClockComponent,
    CalendarComponent,
    ProductsComponent,
    FeedbackComponent,
    TestComponent,
    ModalDialogComponent
  ],
  imports: [
    BrowserModule, FormsModule, RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
