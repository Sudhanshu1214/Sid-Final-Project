import { Component, OnInit } from '@angular/core';
import { Contact2ServiceService } from '../contact2-service.service';


@Component({
  selector: 'app-index-page',
  templateUrl: './index-page.component.html',
  styleUrls: ['./index-page.component.css']
})
export class IndexPageComponent implements OnInit {

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
