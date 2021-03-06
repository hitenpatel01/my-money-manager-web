export const environment = {
    production: false,
    hmr: true,
    darkTheme: false,
    urls: {
        authorizationPkce: 'https://m3.auth.us-east-1.amazoncognito.com/oauth2/authorize?response_type=code&client_id=4mstutl93bnan7gnrdff6t7ado&redirect_uri=http://localhost:4200/user&state={{STATE}}&code_challenge_method=S256&code_challenge={{CODE_CHALLENGE}}',
        token: 'https://m3.auth.us-east-1.amazoncognito.com/oauth2/token',
        marketData: 'http://localhost:9001/getMarketData/',
        redirect: 'http://localhost:4200/user',
    },
    idpClientId: '4mstutl93bnan7gnrdff6t7ado',
};
