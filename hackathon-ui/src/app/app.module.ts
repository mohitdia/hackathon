import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from  '@angular/common/http';
import { HttpClient } from '@angular/common/http';

@NgModule({
  imports: [BrowserModule,BrowserAnimationsModule,HttpClientModule,  FormsModule, OverlayPanelModule, InputTextareaModule, ButtonModule],
  declarations: [AppComponent],
  providers: [{ provide: HttpClient, useClass: HttpClient }],
  bootstrap: [AppComponent]
})
export class AppModule {}