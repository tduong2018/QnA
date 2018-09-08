import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { DataService } from "./data.service";
import { NgxSpinnerService } from "ngx-spinner";


@Injectable()
export class CommentService extends DataService{
    constructor(http: HttpClient,spinner: NgxSpinnerService) {
        super('Commentapi', http,spinner);
    }
}