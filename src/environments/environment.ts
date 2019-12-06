// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,


  //URL Permettant de récupérer le jeton d'accès (voir BlueCoder > API > Se Documenter > Comment utiliser une API)
  URL_TOKEN : "https://gw.hml.api.enedis.fr/v1/oauth2/token?",

  //Informations issues de BlueCoder
  CLIENT_ID: "",
  CLIENT_SECRET: "",


  //Informations issues de BlueCoder :
  ENDPOINT_API: "",
  REDIRECT_URI: "",


  //URL de l'API "Contact" de BlueCoder
  URL_API_INFOS_AGENT: "",

  //Ajouter toutes les URL des API nécessaires ici

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
