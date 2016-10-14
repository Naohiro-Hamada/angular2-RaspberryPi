import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Location, LocationStrategy } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!!!!!!';

  constructor(private http: Http) {}

  show(): void {
    console.log('start');
    this.http.get('http://192.168.128.100:3000/api/hoge')
    .subscribe((r: Response) => 
      this.title = r.json().hoge
      );
  };
}
