import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,FormBuilder,Validators } from "@angular/forms";

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  loginForm:FormGroup;

  constructor(private formBuilder:FormBuilder) { 
    
    this.loginForm=formBuilder.group({

//=============================== 1st method to create the instance of the reactive forms ================================//

    // username:new FormControl(),
    // userpassword:new FormControl()
   
    
//================ 2nd method to create the instance of the reactive forms while applying Validations ================//


    username:[' ',Validators.required],
    userpassword:[' ',Validators.required],
//   usercheck:[' ',Validators.requiredTrue]                 this is for the checkBox...
    useremail:[' ',[Validators.email,
                    Validators.minLength(3),
                    Validators.maxLength(20),
                    Validators.email]]               //   this is for the email...




  });
  }

  ngOnInit() {
  }


  collectData()
  {
    console.warn(this.loginForm.value);
  }

}
