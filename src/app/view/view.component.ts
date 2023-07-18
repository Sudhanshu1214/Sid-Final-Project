import { Component, OnInit } from '@angular/core';
import { Contact2ServiceService } from '../contact2-service.service';


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {


  userFormDetails: any = [];
  // id:number;
  resp: any = [];
  constructor(private contact2Service:Contact2ServiceService) { }


  //=================================Two Way Binding Concept===================== //



  // userId:number;
  detaill: any[];



  studentToUpdate = {

    id:"",
    name: "",
    email: "",
    mess: ""

  };



  edit(detail) {
    this.studentToUpdate = detail;
    console.log("edit------------>",detail.id);
    console.log("edit------------>",this.studentToUpdate.id);
    console.log("edit------------>",this.studentToUpdate);


  }






  //==================================================================================== //



  ngOnInit() {
    this.onView();
  }


  onView() {

    this.contact2Service.getForm().subscribe(
      (resp1: any[]) => {
        console.log(resp1);
        // this.userId=resp1.userId
        this.detaill = resp1;

        this.resp = resp1;
        console.log(this.resp);

        // var keys = Object.keys(resp1);
        // var len = keys.length;
        // console.log(len)

        // console.log(resp1.length)
        // for (let i = 0; i < resp1.length; i++) {
        // alert("enter")

        // this.userFormDetails.push(resp1)

        // console.log("user", this.userFormDetails);
        // }

      },
      (err) => {
        console.log(err);
      }
    );


  }



  onDelete(id: any) {
    console.log(id);
    this.contact2Service.deleteForm(id).subscribe(

      (resp) => {
        console.log(resp);
        // this.formService.getForm();
        this.onView();

      },
      (err) => { console.log(err); }
    );


  }



  onUpdate(id:any) {
  
    console.log(id);

  
    this.contact2Service.updateForm(id,this.studentToUpdate).subscribe(
      (resp) => {
        
        console.log(resp);

        alert("data updated Succesfully");
        console.log("end");


      },
      (err) => {
        alert("data not updated");

        console.log(err);
        console.log("end");


      }
    );



  }
 


}
