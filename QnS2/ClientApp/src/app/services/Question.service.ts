import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { DataService } from "./data.service";
import { NgxSpinnerService } from "ngx-spinner";


@Injectable()
export class QuestionService extends DataService{
    constructor(http: HttpClient,spinner: NgxSpinnerService) {
        super('Question', http,spinner);
    }

    getCustom(action){
        return super.get(action);
    }
}