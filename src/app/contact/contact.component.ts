import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormService } from '../student-connect.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

          // creating an object for get Api by the spring boot...




// UserFormDetails=null;


  constructor(private formService:FormService) { }


  ngOnInit() {
   
  }
  

//============================Method For the form===============================================================//


  onSubmit(contactForm){
  
  this.formService.addForm(contactForm.value).subscribe(
    (resp)=>{
      console.log(resp);

    },
    (err)=>{
      console.log(err);
    }
  );

}







//============================Pre-Define Values===============================================================//

  userData={

    Name:"Sid Rajput",
    Email:"imsid@gmail.com",
    Password:12345678,
    Address:"Delhi"

  }


//============================Method for Toggle the Button===============================================================//
   
showMe:boolean=false                   // making Variables in Angular 9

  toggleTag()
  {
    this.showMe=!this.showMe

  }

}
