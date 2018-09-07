import { Injectable } from "@angular/core";
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from "../../environments/environment";
import { DataService } from "./data.service";


@Injectable()
export class UserRoleService extends DataService{
    constructor(http: HttpClient) {
        super('userrole', http);
    }
}