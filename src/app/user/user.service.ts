import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import * as uuid from 'uuid/v4';
import * as pkce from 'pkce';
import jwt from 'jwt-decode';

import { environment } from '../../environments/environment';
import { StateService } from '../core/state/state.service';
import { User } from './user.model';
import { ActivatedRoute, Router } from '@angular/router';

const AUTHORIZATION_COORELATION_ID = 'M3::AUTHORIZATION_COORELATION_ID';
const AUTHORIZATION_PKCE_CHALLENGE = 'M3::AUTHORIZATION_PKCE_CHALLENGE';
const AUTHORIZATION_TOKENS = 'M3::AUTHORIZATION_TOKENS';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  /* random value used as state parameter of OAuth Authorization Code flow */
  readonly correlationId: string;

  /* random pkce value pair for OAuth Authorization Code flow */
  readonly pkceChallenge: {
    codeChallenge: string;
    codeVerifier: string;
  };

  private _user: User;
  get user() {
    return this._user;
  }

  get isUserLoggedIn() {
    return null != this._user;
  }

  constructor(private _stateService: StateService, private _http: HttpClient, private _router: Router) {
    /* Values are fetched from session storage if exists  */
    this.correlationId = this._stateService.getValue(AUTHORIZATION_COORELATION_ID) || uuid();
    this.pkceChallenge = this._stateService.getValue(AUTHORIZATION_PKCE_CHALLENGE) || pkce.create(43);
  }
  get authorizationUrl() {
    return environment.urls.authorizationPkce
      .replace('{{STATE}}', this.correlationId)
      .replace('{{CODE_CHALLENGE}}', this.pkceChallenge.codeChallenge);
  }
  preAuthorization() {
    this._stateService.setValue(AUTHORIZATION_COORELATION_ID, this.correlationId);
    this._stateService.setValue(AUTHORIZATION_PKCE_CHALLENGE, this.pkceChallenge);
  }
  login(state: string, code: string) {
    if (this.correlationId !== state) {
      throw new Error(`Authentication failed due to mismatch correlation id`);
    }

    const body = new HttpParams()
      .set('grant_type', 'authorization_code')
      .set('client_id', '4mstutl93bnan7gnrdff6t7ado')
      .set('redirect_uri', 'http://localhost:4200/user')
      .set('code', code)
      .set('code_verifier', this.pkceChallenge.codeVerifier);

    this._http.post(environment.urls.token, body, {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    }).subscribe(data => {
      this._stateService.setValue(AUTHORIZATION_TOKENS, data);
      const decodedIdToken = jwt(data['id_token']);
      this._user = new User(decodedIdToken['cognito:username']
        , decodedIdToken['given_name']
        , decodedIdToken['family_name']
        , decodedIdToken['email']);

      this._router.navigate(['/']);
    });
  }
  logout() {
    this._user = null;
    this._stateService.clearValue(AUTHORIZATION_TOKENS);
    this._stateService.clearValue(AUTHORIZATION_COORELATION_ID);
    this._stateService.clearValue(AUTHORIZATION_PKCE_CHALLENGE);
  }

}
