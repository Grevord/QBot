export const environment = {
    production: false,
    apiBaseUrl: "https://diiageqbot.azurewebsites.net/api/Request/",

    authConfig: {
        instance: "https://login.microsoftonline.com/",
        tenantId: "14bc5219-40ca-4d62-a8e4-7c97c1236349",
        clientId: "87a9bc61-4a93-4968-91c6-40cc8a851876",
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
