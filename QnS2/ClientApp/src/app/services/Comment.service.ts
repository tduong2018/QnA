import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { DataService } from "./data.service";


@Injectable()
export class CommentService extends DataService{
    constructor(http: HttpClient) {
        super('Commentapi', http);
    }
}