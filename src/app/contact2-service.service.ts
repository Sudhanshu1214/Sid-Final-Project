import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Contact2ServiceService {

  constructor(private http:HttpClient) { }


 



    API='http://localhost:3307';



     public addForm(studentData){
// console.log("studentData",studentData)
    return this.http.post(this.API + '/apipost',studentData);
  }

 


  public addLoginForm(studentData){
    // console.log("studentData",studentData)
        return this.http.post(this.API + '/loginapipost',studentData);
      }
      
  
    public getLoginAcess(){
      return this.http.get(this.API+ '/sqlapiget'); // all register data will be shown
    }



    // public login(loginUsername,loginPassword){
    //   return this.http.post(this.API+'/login',loginUsername,loginPassword);
    // }





    // public loginByEmail(email:any){
    //   alert("h");
    //   console.log("loginData email is ------------------>",email.value,"--------->");
    //   return this.http.get(this.API +'/getDataByEmail/'+email);
    // }






       public getForm(){
    // console.log("studentData",studentData)
        return this.http.get(this.API + '/apiget');
      }
  

      
      public getLoginAll(){
        // console.log("studentData",studentData)
            return this.http.get(this.API + '/loginapiget');
          }
      
    




      public updateForm(id:any,studentData){

            console.log("Start");
            console.log("studentdata id ------------------>",id)
            return this.http.put(this.API + '/apiupdate/'+id,studentData);

      }



      public updateloginForm(lid:any,studentData){

        console.log("Start");
        console.log("studentdata id ------------------>",lid)
        return this.http.put(this.API + '/loginapiupdate/'+lid,studentData);

  }





 

      public deleteForm(id:any){

        return this.http.delete(this.API + '/apidelete/'+id); 
      }




      public deleteloginForm(lid:any){

        return this.http.delete(this.API + '/loginapidelete/'+lid); 
      }



} 
