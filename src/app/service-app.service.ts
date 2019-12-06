import { environment } from './../environments/environment.prod';
import { Injectable } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';

@Injectable({
  providedIn: 'root'
})
export class ServiceAppService {

  jeton_acces               :     any;
  agent                     :     any = {nni: "", nom: "", prenom: "", mail: ""};

  constructor(
    private httpNative : HTTP
  ) { }


  /**
   * Permet de récuperer le jeton d'accès de l'utilisateur connecté
   * @param code 
   * @param redirect_uri 
   */
  userConnected(code : any, redirect_uri : any){
    let promise = new Promise( (resolve, reject) => {

      let headers : any = { 'Content-Type': 'application/x-www-form-urlencoded' },
      body        : any = { 
        "client_id": environment.CLIENT_ID, 
        "client_secret": environment.CLIENT_SECRET, 
        "grant_type": "authorization_code", 
        "code": code, 
        "redirect_uri": redirect_uri 
      },
      url         : any = environment.URL_TOKEN;
      



      this.httpNative.post(url, body, headers).then( 
        (res) => {
          this.jeton_acces          = JSON.parse(res.data);
          this.agent.nni            = JSON.parse(res.data).gardian_id;
          resolve(JSON.parse(res.data));
        }, err => reject(err)
      );
    });

    return(promise);
  }




  /**
   * Permet d'obtenir des infos sur l'agent connecté, notamment l'adresse mail
   */
  getInfosVisiteur(){

    let promise = new Promise( (resolve, reject) => {

      let headers : {[key: string]: string } = { 'Content-type': 'application/json', 'Accept': 'application/json', 'Authorization': this.jeton_acces.token_type + ' ' + this.jeton_acces.access_token},
          body    : any = "",
          url     : any = environment.URL_API_INFOS_AGENT + this.agent.nni;

      this.httpNative.get(url, body, headers).then( 
        (res) => {
          console.log(JSON.parse(res.data));
          this.agent.nom       = JSON.parse(res.data).contacts[0].identity.first_name;
          this.agent.prenom    = JSON.parse(res.data).contacts[0].identity.name;
          this.agent.mail      = JSON.parse(res.data).contacts[0].contact_point.email;
          resolve(this.agent);
        }
      )
    });

    return promise;
  }
}
