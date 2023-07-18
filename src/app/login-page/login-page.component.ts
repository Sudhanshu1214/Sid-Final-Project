import { Component, OnInit } from '@angular/core';
import { Contact2ServiceService } from '../contact2-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {


  // RegisterData={

  //   lid:"",
  //   lname:"",
  //   lemail: "",
  //   lpass: ""

  // }
  RegisterData:any=[];
  // userFormDetails: any = [];

  studentToUpdate = {

    lemail: "",
    lpass: ""

  };








  constructor(private contact2Service:Contact2ServiceService,private router: Router) { }

  ngOnInit() {

    // console.log(this.RegisterData);
  }




//   onSubmit(studentToUpdate){

//    console.log("Form is submitted...");
//    if((this.studentToUpdate.lemail!='' && this.studentToUpdate.lpass!='')&&(this.studentToUpdate.lemail!=null && this.studentToUpdate.lpass!=null))
//    {
//     console.log("Required submit...")
//     console.log("resgister data ------------->",this.RegisterData);
//     console.log("resgister data ------------->",this.studentToUpdate);
//     this.contact2Service.addLoginAcess(this.studentToUpdate).subscribe(
//       (resp)=>{
//         console.log("Add login Acess----------> ",resp);
//       },
//       (err)=>
//       {
//         console.log(err);
//       }
//     )

//    }
//    else
//    {
// console.log("Fields are empty...")

//    }

//     }


onSubmit(loginForm:any){

  // console.log("email inside the login component.ts----->",email);

  // console.log("loginForm values are-------->",loginForm.value);

   this.contact2Service.getLoginAcess().subscribe(
     (resp:any)=>{

       console.log("Got login Data by Email----------> ",resp);
       this.RegisterData=resp;
    let token=false;

      //  console.log("RegisterData is ---------->",this.RegisterData);
      //  console.log("loginform value",loginForm.lemail);
       for(var i=0;i<this.RegisterData.length;i++)
       {
        // console.log(this.RegisterData[i].lpass);

       if(loginForm.lemail==this.RegisterData[i].lemail && loginForm.lpass==this.RegisterData[i].lpass){
        alert("Login Success");
        token=true;
        break;


       }

       }
       if(token==false){
        alert("Invalid Username and Password");
       }
       else
       {
                  this.router.navigate(['/index']);

       }
     },
     (err)=>
     {
       console.log(err);
     }
   )
  }


}




// onSubmit(email:any){

//   console.log("email inside the login component.ts----->",email);

//   // console.log("loginForm values are-------->",loginForm.value);

//    this.contact2Service.loginByEmail(email).subscribe(
//      (resp)=>{

//        console.log("Got login Data by Email----------> ",resp);
//       //  if(loginForm.lpass==pass)


//      },
//      (err)=>
//      {
//        console.log(err);
//      }
//    )
//   }

