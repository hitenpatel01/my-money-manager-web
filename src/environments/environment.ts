// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  hmr: false,
  darkTheme: false,
  urls: {
    authorizationPkce: 'https://m3.auth.us-east-1.amazoncognito.com/oauth2/authorize?response_type=code&client_id=4mstutl93bnan7gnrdff6t7ado&redirect_uri=http://localhost:4200/user&state={{STATE}}&code_challenge_method=S256&code_challenge={{CODE_CHALLENGE}}',
    token: 'https://m3.auth.us-east-1.amazoncognito.com/oauth2/token',
    redirect: 'http://localhost:4200/user',
    marketData: 'http://localhost:9001/getMarketData/'
  },
  idpClientId: '4mstutl93bnan7gnrdff6t7ado',

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
