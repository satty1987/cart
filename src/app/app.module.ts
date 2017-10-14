import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CartComponent } from './components/cart/cart.component';
import { ModalDirective } from './components/modal.directive';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    ModalDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
