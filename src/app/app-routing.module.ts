import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component'
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
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
import { OurServicesComponent } from './our-services/our-services.component';


const routes: Routes = [
  // {
  //   path: '', redirectTo: 'home', pathMatch: 'full'
  // },

  { path: '', component: IndexPageComponent },

  // {
  //   path: 'contact', redirectTo: 'contact', pathMatch: 'full'
  // },

  { path: 'contact', component: ContactComponent },

  { path: 'contact2', component: Contact2Component },
  
  { path:'home',component:HomeComponent  },

  { path:'about' , component:HomeComponent },

  { path:'get-api' , component:GetAPIComponent },

  {path:'reactive' ,component:ReactiveFormComponent} ,

  {path:'views' ,component:ViewComponent}   ,

  {path:'loginviews',component:LoginViewComponent},

  {path:'cards',component:CardsComponent},

  {path:'index',component:IndexPageComponent},
  
  {path:'cloud',component:CloudComponent},

  {path:'cyber',component:CyberComponent},

  {path:'iot',component:IOTComponent},

  {path:'tc',component:TCComponent},

  {path:'login',component:LoginPageComponent},
  
  {path:'register',component:RegisterPageComponent},

  {path:'services',component:OurServicesComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
