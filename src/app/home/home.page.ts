import { ServiceAppService } from './../service-app.service';
import { environment } from './../../environments/environment.prod';
import { Component } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  myBrowser         :   any;
  redirect_uri      :   any       = environment.REDIRECT_URI;
  code              :   any       = '';
  connexionGardian  :   boolean   = false;

  constructor(
    private iab         : InAppBrowser,
    private serviceApp  : ServiceAppService
  ) {}


  goToGardian(){
  
    let mylink = environment.ENDPOINT_API + "/v1/oauth2/authorize?client_id=" + environment.CLIENT_ID +"&response_type=code&redirect_uri=" + environment.REDIRECT_URI + "&user_type=internal";

    this.myBrowser = this.iab.create(mylink, '_blank');

    //Lorsque le chargement du navigateur est fini
    this.myBrowser.on('loadstop').subscribe(
      data => {

          //Extraction de l'URI pas très jolie... peut-être améliorée !
          if (data.url.substring(0, 37) == this.redirect_uri){
            //Remise en forme des données de l'URL
            let split_URL = data.url.toString().split("?");
            this.code     = split_URL[1].toString().replace('code=', '');
            
            
            this.closeBrowser(); //On quitte automatiquement le navigateur
          }
      });



    //Lorsque le navigateur se quitte  
    this.myBrowser.on("exit").subscribe(
      (data) => {

        //On récupère le jeton d'accès de l'utilisateur connecté
        this.serviceApp.userConnected(this.code, this.redirect_uri).then(
          (res) => {

            //ICI : Connexion ok
            console.log(res);


            //Etape éventuelle : On récupère les infos de l'agent
            this.serviceApp.getInfosVisiteur().then(
              (res) => {
                
                //ICI : Utilisateur connecté, et on dispose des informations à son sujet
                console.log(res);

              }
            );
          }, err => {

            //ICI : problème de connexion
            //Traitement
            console.log(err);
          }
        )
        
      } 
    );
}

  closeBrowser() {
    this.myBrowser.close();
  }
}
