import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})

export class SingleUserService {


  constructor( private http: HttpClient) { }

  getQuery( query: string ){
    const url = `https://reqres.in/api/users/${query}`;
    return this.http.get(url);
  }

  getList( query: string ){
    const url = `https://reqres.in/api/users?page=${query}`;
    return this.http.get(url);
  }

  eliminar(){
    return this.http.delete(`https://reqres.in/api/users/2`);
  }

  
  /*addNewUser(user: Data): Observable<Data>{
    return this.http.post<Data>('https://reqres.in/api/users', user);
  }*/ 

  
  matchPassword(pass1: string, pass2: string){
    return ( formGroup: FormGroup) => {
      const controlPass1 = formGroup.controls[pass1];
      const controlPass2 = formGroup.controls[pass2];
      if(controlPass1.value === controlPass2.value){
        controlPass2.setErrors(null);
      }else{
        controlPass2.setErrors({passError: true})
      }
    }
  }

  
}
