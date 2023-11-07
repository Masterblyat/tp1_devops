# API HTTP TypeScript Simple

Ce projet est une application TypeScript qui crée une API HTTP minimaliste. L'API expose un seul endpoint `/ping` qui renvoie les headers de la requête HTTP au format JSON. Vous pouvez configurer le port d'écoute via une variable d'environnement (`PING_LISTEN_PORT`) ou utiliser un port par défaut.

## Installation

1. Clonez ce référentiel vers votre machine.
```bash
git clone https://github.com/Masterblyat/tp1_devops.git
```

Accédez au répertoire du projet.
```bash
cd api-http-typescript-simple
```

Installez les dépendances.
```bash
npm i
```
Démarrer le projet (le port d'écoute de base est le 3000):
```npm start```

Préciser un port d'écoute dans les variables d'environnement (3200 par exemple) :
```bash
PING_LISTEN_PORT=3200 npm start
```