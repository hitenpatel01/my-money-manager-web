import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import * as uuid from 'uuid/v4';
import * as pkce from 'pkce';
import jwt from 'jwt-decode';

import { environment } from '../../environments/environment';
import { StateService } from '../core/state/state.service';
import { User } from './user.model';

const AUTHORIZATION_COORELATION_ID = 'M3::AUTHORIZATION_COORELATION_ID';
const AUTHORIZATION_PKCE_CHALLENGE = 'M3::AUTHORIZATION_PKCE_CHALLENGE';
const AUTHORIZATION_TOKENS = 'M3::AUTHORIZATION_TOKENS';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _user: User;
  private _correlationId: string;
  private _pkceChallenge: {
    codeChallenge: string;
    codeVerifier: string;
  };
  get user() {
    return this._user;
  }
  constructor(private _stateService: StateService, private _http: HttpClient) {
    this.preAuthorization();
  }
  preAuthorization() {
    this._correlationId = this._stateService.getValue(AUTHORIZATION_COORELATION_ID) || uuid();
    this._stateService.setValue(AUTHORIZATION_COORELATION_ID, this._correlationId);


    this._pkceChallenge = this._stateService.getValue(AUTHORIZATION_PKCE_CHALLENGE) || pkce.create(43);
    this._stateService.setValue(AUTHORIZATION_PKCE_CHALLENGE, this._pkceChallenge);
  }
  getAuthorizationUrl() {
    return environment.urls.authorizationPkce
      .replace('{{STATE}}', this._correlationId)
      .replace('{{CODE_CHALLENGE}}', this._pkceChallenge.codeChallenge);
  }
  postAuthorization(state: string, code: string) {
    if (this._correlationId !== state) {
      throw new Error(`Authentication failed due to mismatch correlation id`);
    }

    const body = new HttpParams()
      .set('grant_type', 'authorization_code')
      .set('client_id', '4mstutl93bnan7gnrdff6t7ado')
      .set('redirect_uri', 'http://localhost:4200')
      .set('code', code)
      .set('code_verifier', this._pkceChallenge.codeVerifier);

    this._http.post(environment.urls.token, body, {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    }).subscribe(data => {
      this._stateService.setValue(AUTHORIZATION_TOKENS, data);
      const decodedIdToken = jwt(data['id_token']);
      this._user = new User(decodedIdToken['cognito:username']
        , decodedIdToken['given_name']
        , decodedIdToken['family_name']
        , decodedIdToken['email']);
    });
  }

}
