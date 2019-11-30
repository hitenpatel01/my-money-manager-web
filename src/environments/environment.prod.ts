export const environment = {
  production: true,
  hmr: false,
  darkTheme: false,
  urls: {
    authorization0: 'https://m3.auth.us-east-1.amazoncognito.com/oauth2/authorize?response_type=code&client_id=4mstutl93bnan7gnrdff6t7ado&redirect_uri=http://localhost:4200&state={{STATE}}&code_challenge_method=S256&code_challenge={{CODE_CHALLENGE}}',
    authorization: 'https://m3.auth.us-east-1.amazoncognito.com/oauth2/authorize?response_type=code&client_id=4mstutl93bnan7gnrdff6t7ado&redirect_uri=http://localhost:4200&state={{STATE}}',
    token: 'https://m3.auth.us-east-1.amazoncognito.com/oauth2/token',
    marketData: 'http://localhost:9001/getMarketData/'
  }
};
