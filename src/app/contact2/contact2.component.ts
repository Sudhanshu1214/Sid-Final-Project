import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contact2ServiceService } from '../contact2-service.service';


@Component({
  selector: 'app-contact2',
  templateUrl: './contact2.component.html',
  styleUrls: ['./contact2.component.css']
})
export class Contact2Component implements OnInit {

  constructor(private contact2Service:Contact2ServiceService) { }

  ngOnInit() {
  } 


  onSubmit(contactForm){
  
    this.contact2Service.addForm(contactForm.value).subscribe(
      (resp)=>{
        console.log(resp);
  
      },
      (err)=>{
        console.log(err);
      }
    );


    }
}
