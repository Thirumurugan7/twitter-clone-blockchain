import { OpenloginAdapter } from "@web3auth/openlogin-adapter";

const clientId = "<client_id_from_the_web3auth_dashboard_plug_n_play_project>";

const openloginAdapter = new OpenloginAdapter({
  adapterSettings: {
    clientId,
    network: "testnet",
    uxMode: "popup",
    whiteLabel: {
      name: "Twitter DApp",
      logoLight: "<hosted-logo-image-link>",
      logoDark: "<hosted-logo-image-link>",
      defaultLanguage: "en",
      dark: true, // whether to enable dark mode. defaultValue: false
    },
    loginConfig: {
      // Add login configs corresponding to the providers on modal
      // Twitter login
      jwt: {
        name: "Custom Auth Login",
        Verifier: "<client_verifier_from_Auth0_dashboard>", // Please create a verifier on the developer dashboard and pass the name here
        typeOfLogin: "twitter", // Pass on the login provider of the verifier you've created
        clientId: "<clientId_from_Auth_0_dashboard>", // Pass on the clientId of the login provider here - Please note this differs from the Web3Auth ClientID. This is the JWT Client ID
      },
    },
  },
});

web3auth.configureAdapter(openloginAdapter);
