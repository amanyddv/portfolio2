import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ServiceService {
    url = "https://amanyddv-api.vercel.app/"
    local = "http://localhost:7000/"
  constructor(private http:HttpClient) { }

  send(contact:any){
    return this.http.post<any>(this.url+"contact",contact)
  }
}
