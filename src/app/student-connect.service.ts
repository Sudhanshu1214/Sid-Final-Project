import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(private http:HttpClient) { }

  API='http://localhost:3307';





  public addForm(studentData){
// console.log("studentData",studentData)
    return this.http.post(this.API + '/apipost',studentData);
  }
  





       public getForm(){
    // console.log("studentData",studentData)
        return this.http.get(this.API + '/apiget');
      }
  




      public updateForm(id:any,studentData){

          console.log("studentdata",studentData,id)
            return this.http.put(this.API + '/apiupdate/'+id,studentData);

      }



      public deleteForm(id:number){

        return this.http.delete(this.API + '/apidelete/'+id); 
      }


}
