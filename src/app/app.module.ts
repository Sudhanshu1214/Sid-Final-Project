import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';                                   // used for the forms
import { ReactiveFormsModule } from "@angular/forms";
import {HttpClientModule} from '@angular/common/http'                                           // to call get API
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { GetAPIComponent } from './get-api/get-api.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ViewComponent } from './view/view.component';
import { CardsComponent } from './cards/cards.component';
import { IndexPageComponent } from './index-page/index-page.component';
import { CloudComponent } from './cloud/cloud.component';
import { CyberComponent } from './cyber/cyber.component';
import { IOTComponent } from './iot/iot.component';
import { Contact2Component } from './contact2/contact2.component';
import { TCComponent } from './tc/tc.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { LoginViewComponent } from './login-view/login-view.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OurServicesComponent } from './our-services/our-services.component';
// import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    GetAPIComponent,
    ReactiveFormComponent,
    ViewComponent,
    CardsComponent,
    IndexPageComponent,
    CloudComponent,
    CyberComponent,
    IOTComponent,
    Contact2Component,
    TCComponent,
    LoginPageComponent,
    RegisterPageComponent,
    LoginViewComponent,
    OurServicesComponent,
    // BrowserModule,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
//     NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
