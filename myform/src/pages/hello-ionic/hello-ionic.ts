import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { AlertController } from 'ionic-angular';
@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  name:string = "caiser";
  url:any;
  constructor(private http: HttpClient) {}
    ngOnInit() 
    {
console.log("hello "+this.name);
    }
    login(form:NgForm){
      // console.log(form.value);
     let  postParams = form.value;
     const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      
      })
    };
     console.log(postParams)
     const postdata = { username : "sharath", password: "123"};
      this.http.post("http://127.0.0.1:8001/ionic/rest/adduser",postdata,httpOptions )
      .subscribe(data => 
         {
        console.log(data);
      }, error => {
        console.log(error);// Error getting the data
      });
    }
  
   
  }

