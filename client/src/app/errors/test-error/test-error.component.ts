import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-error',
  templateUrl: './test-error.component.html',
  styleUrls: ['./test-error.component.css']
})
export class TestErrorComponent implements OnInit {
  baseurl = 'https://localhost:5001/api/';
  validationErrors: string[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  get404Error(){
    this.http.get(this.baseurl + 'buggy/not-found').subscribe(res =>{
      console.log(res);
    }, error =>{
      console.log(error);
    })
  }

  
  get400Error(){
    this.http.get(this.baseurl + 'buggy/bad-request').subscribe(res =>{
      console.log(res);
    }, error =>{
      console.log(error);
    })
  }

  
  get500Error(){
    this.http.get(this.baseurl + 'buggy/server-error').subscribe(res =>{
      console.log(res);
    }, error =>{
      console.log(error);
    })
  }

  
  get401Error(){
    this.http.get(this.baseurl + 'buggy/auth').subscribe(res =>{
      console.log(res);
    }, error =>{
      console.log(error);
    })
  }

  
  get400ValidationError(){
    this.http.post(this.baseurl + 'account/register',{}).subscribe(res =>{
      console.log(res);
    }, error =>{
      console.log(error);
      this.validationErrors = error;
    })
  }
}
