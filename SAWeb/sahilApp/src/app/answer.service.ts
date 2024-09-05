import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, throwError } from "rxjs";

@Injectable({ providedIn: 'root' })

export class AnswerService {
    constructor(private _httpClient: HttpClient) { }
    static getheaders = (apikey: string): HttpHeaders => {
        if (apikey) {
            return new HttpHeaders({
                'Content-Type': 'application/json',
                'X-Api-Key': apikey
            })
        }
        throw new Error('apiKey must be defined')
    }
    saveAnswer(saveName : string) {
        const url = "http://localhost:5081/answer/saveAnswers";
        const postdata = { name: saveName }
        const header = AnswerService.getheaders('test')
        return this._httpClient.post<any>(url, postdata, { headers: header })
        .pipe(catchError((err: any) => throwError(()=> new Error(err))));
    }
}

