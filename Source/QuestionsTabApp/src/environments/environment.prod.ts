export const environment = {
    production: false,
    apiBaseUrl: "https://diiageqbotjanvier.azurewebsites.net/api/Request/",
    selfUrl: "https://diiageqbotjanvier-questions.azurewebsites.net",


    authConfig: {
        instance: "https://login.microsoftonline.com/",
        tenantId: "fefe9af7-f330-429d-8087-f5e656f7a7ce",
        clientId: "61397ba3-ae3c-4a1c-b592-b00e95e2dd32",
        redirectUri: "/app-silent-end",
        cacheLocation: "localStorage",
        navigateToLoginRequestUrl: false,
        extraQueryParameters: "",
        popUp: true,
        popUpUri: "/app-silent-start",
        popUpWidth: 600,
        popUpHeight: 535,
    },
    
    // do not populate the following:
    upn: "",
    tid: "",
    gid: "",
    cname: "",
};
