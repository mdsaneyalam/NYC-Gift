import { Component, OnInit } from '@angular/core';
import { StoreService } from "../../Services/store.service";


@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']

})
export class HomeComponent implements OnInit {
    stores: any[];

    constructor(private storeService: StoreService) { }

    ngOnInit() {
       // this.storeService.getStores().subscribe(stores => this.stores == stores);


    }

}
