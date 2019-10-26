import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {
  url = 'http://localhost:3000/send';
  // url = 'https://email-service1.herokuapp.com/send';
  // url = 'https://us-central1-kohls-merch-pl-lle.cloudfunctions.net/email-service/send';
  constructor(private http: HttpClient) {}

  sendMessage(messageContent: any) {
    return this.http.post(this.url, JSON.stringify(messageContent), {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      responseType: 'json'
    });
  }

  sendMessage1(messageContent: any) {
    return this.http.post(this.url, messageContent);
  }
}
