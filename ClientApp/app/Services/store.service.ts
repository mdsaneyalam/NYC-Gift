import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';


@Injectable()
export class StoreService {
    

    constructor(private http: Http) { }

    getStores() {
        return this.http.get('/api/stores').map(res => res.json());
    }

}
