export const environment = {
    production: false,
    apiBaseUrl: "https://qbotdemotesting.azurewebsites.net/api/Request/",
    selfUrl: "https://diiageqbot-question.azurewebsites.net",

    authConfig: {
        instance: "https://login.microsoftonline.com/",
        tenantId: "fefe9af7-f330-429d-8087-f5e656f7a7ce",
        clientId: "f9fc6030-ae32-4f5a-97ff-485a869f51f0",
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
