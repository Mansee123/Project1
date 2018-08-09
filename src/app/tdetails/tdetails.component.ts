import { Component, OnInit } from '@angular/core';
import { SessionStorageService } from '../../../node_modules/ngx-webstorage';
import { tdetails } from '../models/tdetail.module';
import { Http } from '../../../node_modules/@angular/http';
import { UserService } from '../user.service';


@Component({
  selector: 'app-tdetails',
  templateUrl: './tdetails.component.html',
  styleUrls: ['./tdetails.component.css']
})
export class TdetailsComponent implements OnInit {
//task_name:string;
userData	: any = {};

tdetail : tdetails ={
  month:"August",
  var_1:null,
  var_2:null,
  var_3:null,
  var_4:null,
  var_5:null
}

  constructor(private sessiont:SessionStorageService,private http:Http,private user:UserService) { }

  ngOnInit() {
    this.user.getUsertask().subscribe(data => this.userData = data);
    ///this.task_name=this.sessiont.retrieve("task");
    
    
  }
  saveTask = function(user2){

    console.log(user2.i)
    this.taskObj = {
      "emp_id" : this.sessiont.retrieve("username"),
      "task_id" :this.sessiont.retrieve("task_id") ,
      "month" : user2.month ,
      "var_1" : user2.var_1,
      "var_2" : user2.var_2 ,
      "var_3" : user2.var_3
      
    }
    this.http.post("http://localhost:8080/taskdetails", this.taskObj).subscribe((res:Response) => {
          
      })
      
  }

}
