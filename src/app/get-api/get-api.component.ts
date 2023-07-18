import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http'                                           // to call get API


@Component({
  selector: 'app-get-api',
  templateUrl: './get-api.component.html',
  styleUrls: ['./get-api.component.css']
})
export class GetAPIComponent implements OnInit {

 

  postData;
  constructor(private http:HttpClient) {



   }

  ngOnInit() {
    this.http.get('https://jsonplaceholder.typicode.com/posts').
    subscribe((data)=>{
      // console.warn(data)                      // this is for print the data on console...
      this.postData=data
    })

  }
}
