import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'm3-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(private _route: ActivatedRoute, private _userService: UserService) { }

  ngOnInit() {
    const code = this._route.snapshot.queryParams['code'];
    const state = this._route.snapshot.queryParams['state'];

    if (!code) {
      throw new Error(`Authorization code to process IdP response not found`);
    }

    if (!state) {
      throw new Error(`State to process IdP response not found`);
    }

    this._userService.login(state, code);
  }

}
