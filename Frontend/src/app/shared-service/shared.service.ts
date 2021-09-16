import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class sharedService {
    private email = '';

    private sub = new Subject();
    subj$ = this.sub.asObservable();

    send(value: string) {
        this.sub.next(value);
        this.email = value;
        //this.order = value;
    }
    getEmail() {
        return this.email;
    }
    // getOrder() {
    //     return this.order;
    // }
}