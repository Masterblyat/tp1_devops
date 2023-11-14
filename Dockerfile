#Choix de ubuntu 18 et non 22 uniquement pour pouvoir utiliser Trivy
FROM ubuntu:18.04

RUN apt-get update

RUN apt-get install -y nodejs npm

RUN useradd -m appuser

WORKDIR /usr/src/app

COPY package*.json ./

COPY . .

RUN chown -R appuser:appuser /usr/src/app

EXPOSE 3000

USER appuser

CMD ["node", "build/index.js"]
