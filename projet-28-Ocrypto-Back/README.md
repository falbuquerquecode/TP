# O'Crypto backend api

Ce projet utilise [nodeJS](https://nodejs.org/dist/latest-v16.x/docs/api/) et le midelware [Express](https://expressjs.com/fr/4x/api.html)

## Installation

Une fois ce repo téléchargé et ouvert dans votre éditeur de code, merci de suivre les étapes suivantes.


Si vous souhaitez simplement utiliser cette api sans y apporter de modifications, tapez la commande suivante dans votre terminal: 
```bash
npm run installProjectDepedencies
```
Elle vous permettra d'installer toutes les dépendences nécéssaires au bon fonctionnement de l'api.

Dans le cas où vous souhtez y apporter des modifications, tapez plutôt la commande suivante :
```bash
npm run installAllDependencies
```
Cette commande permet d'installer à la fois les dépendences necessaires ainsi que les dépendences de developpement.

## Mise en route

Avant de démarrer le serveur veuillez tout d'abord créer, à la racine du repertoire, un fichier intitulé `.env`.
Une fois créé, veuillez copier le contenu du fichier `.env.example` dans le fichier nouvellement créé.
Il vous permettra de paramétrer facillement vos variables d'environnement.

Attention, merci de vérifiez que votre repertoire comporte bien un fichier intitulé `.gitignore`.
Ce fichier doit initialement contenir les informations suivantes :

```bash
node_modules/
.env
```

Si ce n'est pas le cas veuillez créer ce fichier en y mettant les informations citées au-dessus.
Il permettra à git d'ignorer les fichiers et repertoires renseignés à l'interieur.

### Paramétrage et lancement du serveur web
Dans le fichier `.env`, préalablement créé, veuillez renseigner après `PORT=` le numéro du port que vous souhaitez utiliser.
Dans le cas où rien est renseigné, le port par défaut sera le port 3000.

Une fois cette étape faite vous pouvez d’ores et déjà lancer le serveur en tapant dans votre terminal la commande suivante : 
```bash
npm run server
```
Dans le cas où vous avez installé à la fois les dépendences nécéssaires et les dépendences de developpement, vous verrez apparaître dans votre console les log de chaques requêtes qui seront effectuées au serveur.
Si vous souhaitez modifier les informations renseignées par ces log il faudra le faire depuis le fichier présent dans `app/helpers/logger.js` en vous référant à la documentation technique de [Morgan](https://github.com/expressjs/morgan#readme).

### Mise en place de la bdd