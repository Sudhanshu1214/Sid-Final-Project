import { Component, OnInit } from '@angular/core';
import { Contact2ServiceService } from '../contact2-service.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {



  RegisterData:any;

  constructor(private contact2Service:Contact2ServiceService) { }

  ngOnInit() {
  }

  onSubmit(registerForm){
  
    this.contact2Service.addLoginForm(registerForm.value).subscribe(
      (resp)=>{
        console.log(resp);
        this.RegisterData=resp;
        console.log("register array data ------------------------->",this.RegisterData);
       
      },
      (err)=>{
        console.log(err);
      }
    );

    }



}
