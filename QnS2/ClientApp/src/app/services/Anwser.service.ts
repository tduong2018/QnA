import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { DataService } from "./data.service";


@Injectable()
export class AnwserService extends DataService{
    constructor(http: HttpClient) {
        super('Answerapi', http);
    }
}