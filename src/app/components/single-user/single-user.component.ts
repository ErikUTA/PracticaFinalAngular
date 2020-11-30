import { Component, OnInit } from '@angular/core';
import { SingleUserService } from '../../services/singleUser/single-user.service';


@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.css']
})
export class SingleUserComponent implements OnInit {

  users: any[] = [];
  correo: any[] = [];
  imagenes: '';
  list: [];
  
  ngOnInit(){
    
  }

  constructor(public singleUserService: SingleUserService) { }

  buscar(term){
     this.singleUserService.getQuery(term).subscribe((data:any)=> {
       this.users = data['data'].first_name;
       this.correo = data['data'].email;
       this.imagenes = data['data'].avatar;
       console.log(data);
     })
  }

  

  /*eliminarUser(){
    const cleanUsers = { id: 2 };
    this.singleUserService.deleteUser(cleanUsers.id).subscribe();
  }*/  


}
