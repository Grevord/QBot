export const environment = {
    production: false,
    apiBaseUrl: "https://qbot-diiage.azurewebsites.net/api/Request/",

    authConfig: {
        instance: "https://login.microsoftonline.com/",
        tenantId: "fefe9af7-f330-429d-8087-f5e656f7a7ce",
        clientId: "2818063c-8a2c-4775-914e-37f8373df94d",
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
};
