export const environment = {
  production: true,
  hmr: false,
  darkTheme: false,
  urls: {
    authorizationPkce: 'https://m3.auth.us-east-1.amazoncognito.com/oauth2/authorize?response_type=code&client_id=4mstutl93bnan7gnrdff6t7ado&redirect_uri=https://m3.hitenpatel.net/user&state={{STATE}}&code_challenge_method=S256&code_challenge={{CODE_CHALLENGE}}',
    token: 'https://m3.auth.us-east-1.amazoncognito.com/oauth2/token',
    marketData: 'http://localhost:9001/getMarketData/',
    redirect: 'https://m3.hitenpatel.net/user',
  },
  idpClientId: '4mstutl93bnan7gnrdff6t7ado',
};
