import { Component, OnInit } from '@angular/core';
import { SingleUserService } from '../../services/singleUser/single-user.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(public singleUserService: SingleUserService) { }

  ngOnInit(): void {
  }

  user1: ''; user2: ''; user3: ''; user4: ''; user5: '';
  last1: ''; last2: ''; last3: ''; last4: ''; last5: '';
  email1: ''; email2: ''; email3: ''; email4: ''; email5: '';
  avatar1: ''; avatar2: ''; avatar3: ''; avatar4: ''; avatar5: '';
  
  buscar(term){
    this.singleUserService.getList(term).subscribe((data:any)=> {
      this.user1 = data['data'][1].first_name; this.user2 = data['data'][2].first_name;
      this.user3 = data['data'][3].first_name; this.user4 = data['data'][4].first_name;
      this.user5 = data['data'][5].first_name; 
      this.last1 = data['data'][1].last_name; this.last2 = data['data'][2].last_name;
      this.last3 = data['data'][3].last_name; this.last4 = data['data'][4].last_name;
      this.last5 = data['data'][5].last_name;
      this.email1 = data['data'][1].email; this.email2 = data['data'][2].email;
      this.email3 = data['data'][3].email; this.email4 = data['data'][4].email;
      this.email5 = data['data'][5].email;
      this.avatar1 = data['data'][1].avatar; this.avatar2 = data['data'][2].avatar;
      this.avatar3 = data['data'][3].avatar; this.avatar4 = data['data'][4].avatar;
      this.avatar5 = data['data'][5].avatar;
    })
  }

  eliminar(){
    this.singleUserService.eliminar().subscribe((data:any)=> {
      this.user2 = data;
      this.last2 = data;
      this.email2 = data;
      this.avatar2 = data;
    })
  }
 

}
