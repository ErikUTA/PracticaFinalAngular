import { Component, OnInit } from '@angular/core';
import { SingleUserService } from 'src/app/services/singleUser/single-user.service';
import { Observable } from 'rxjs'


@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  constructor(public singleUserService: SingleUserService) { }
  cadena: any[];

  ngOnInit(): void {
  }

  buscar(term){
    this.singleUserService.getList(term).subscribe((data:any)=>{
      console.log(this.cadena);
      this.cadena = data['data'][0];
    })
  }


}
