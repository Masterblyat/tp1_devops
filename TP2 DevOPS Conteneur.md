# TP2 DevOPS Conteneur

## Prérequis

Avoir Trivy et Docker d'installer sur sa machine

Trivy :
```bash
wget https://github.com/aquasecurity/trivy/releases/download/v0.18.3/trivy_0.18.3_Linux-64bit.deb
sudo dpkg -i trivy_0.18.3_Linux-64bit.deb
```
Docker :
```bash
sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```

## Création et démarrage des conteneurs : 
 - Création des builds : 
#### 1 stage :
```bash
docker build . -t nodeapi
```
#### 2 stages :
(Ne pas oublier de préciser le dockerfile 2 avec l'argument -f)
```bash
docker build . -t nodeapi1 -f Dockerfile2
```

- Démarrage des conteneurs :
```bash
docker run nodeapi -d -p 3000:3000
```

(Mettre un d'autres ports que le premier)
```bash
docker run nodeapi1 -d -p 5000:5000
```

## Test

Voir sur 0.0.0.0:5000/ping et 0.0.0.0:3000/ping que l'on reçoit les headers de la requêtes.

