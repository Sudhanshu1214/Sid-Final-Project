import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ContactDBService {

  constructor() { }


  getData()
  {
    console.warn ("Hii ,I am a Service!!!");
  }



}
