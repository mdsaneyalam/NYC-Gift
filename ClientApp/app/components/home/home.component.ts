import { Component, OnInit } from '@angular/core';
//import { StoreService } from "../../Services/store.service";
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';



@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']

})
export class HomeComponent{
    public stores: Stores[];

   constructor(public http: Http) {
       http.get('/api/stores').subscribe(result => {
           this.stores = result.json() as Stores[];
       }, error => console.error(error));
   }

    

}

interface Stores {
    name: string;
    address: string;
    phone: string;
    
}
