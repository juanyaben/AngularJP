import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class NameServicieService {
 constructor(private http:HttpClient) {}
  buscarPersonas(){
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
 verComentario (){
   return this.http.get('https://jsonplaceholder.typicode.com/comments'); 
 }
 verPost (){
   return this.http.get('https://jsonplaceholder.typicode.com/posts'); 
 }
 buscarPersona (id){
   return this.http.get('https://jsonplaceholder.typicode.com/users/'+id);
 }
}
