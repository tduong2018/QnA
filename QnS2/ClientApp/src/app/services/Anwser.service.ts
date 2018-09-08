import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { DataService } from "./data.service";
import { NgxSpinnerService } from "ngx-spinner";


@Injectable()
export class AnwserService extends DataService{
    constructor(http: HttpClient,spinner: NgxSpinnerService) {
        super('Answerapi', http,spinner);
    }
}