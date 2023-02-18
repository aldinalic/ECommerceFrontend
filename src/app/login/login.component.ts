import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginObj: any = {
    username: '',
    password: ''
  };


  postId: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    
  }

  onLogin() {

    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin':'*' 
    });
    let options = { headers: headers };

    this.http.post<any>('http://localhost:8091/ECommerceClient_war_exploded', { id: 1 }).subscribe(data => {
      this.postId = data.id;
  })

    if(this.postId != undefined) {
      console.log(this.postId);
      alert('Customer Login Successful!');
    } else {
      alert('Wrong Credentials');
    }
  }
}
