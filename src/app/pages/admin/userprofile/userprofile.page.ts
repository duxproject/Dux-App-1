import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from "@angular/router";
import { User } from "../../../shared/services/user/user";


@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.page.html',
  styleUrls: ['./userprofile.page.css']
})
export class UserprofilePage implements OnInit {
  user: User;

  constructor(
    public router: Router,
    public ngZone: NgZone
  ) { }

  getItem(): string{
    const user = JSON.parse(localStorage.getItem('user'));
    
    return user;
  }
  

  ngOnInit() { 
   }

}