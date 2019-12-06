# IONIC 4 - Raccordement GARDIAN


### Presentation
Ce mini-projet vous permet de réaliser une connexion sécurisée via GARDIAN avec Ionic4.

> **Note :** Pour Ionic3, la connexion est globalement similaire. Il faut toutefois penser à modifier les imports :
> Ionic3 : '@ionic-native/http'
> Ionic4 : '@ionic-native/http/ngx'
> Plus d'infos dans la documentation Ionic

### API BlueCoder
Pour utiliser ce projet, vous devez souscrire à des API sous BlueCoder :
- authorize
- contacts

Une fois la souscription effectuée, vous recevrez des **URL et des identifiants** permettant de consommer ces API. Ces URL et identifiants sont à renseigner dans les fichier **"environments"**



### Plugins IONIC nécessaires  
Certains plugins sont nécessaires pour faire fonctionner ce projet :

- **InAppBrowser :**
```
ionic cordova plugin add cordova-plugin-inappbrowser
npm install @ionic-native/in-app-browser
```

  

- **HTTP :**
```
ionic cordova plugin add cordova-plugin-advanced-http
npm install @ionic-native/http
```


---
title: IONIC - Raccordement GARDIAN
author: Bastien ROUSSEL - DR Picardie
date: 06/12/2019
