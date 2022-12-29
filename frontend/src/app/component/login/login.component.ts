import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public uForm = {
    email : null,
    password : null
  }

  public error = null;

  constructor(
    private http:HttpClient
  ){}

  ngOnInit(): void {
    
  }

  onSubmit(){
    return this.http.post('http://127.0.0.1:8000/api/login', this.uForm)
    .subscribe(

      data => console.log(data),

      error => this.handleError(error)
      
    );
  }

  handleError(error:any){
    this.error = error.error.error
  }

  

}
