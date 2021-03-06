import { Injectable } from "@angular/core";
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from "../../environments/environment";
import { DataService } from "./data.service";
import { NgxSpinnerService } from "ngx-spinner";


@Injectable()
export class AdminUserService extends DataService{
    constructor(http: HttpClient,spinner: NgxSpinnerService) {
        super('users', http,spinner);
    }
}
