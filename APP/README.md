# OhWeGo.inc

Pour lancer le test, il faut :

- Lancer le conteneur avec la base de données en entrant cette commande :
    
    docker-compose up --build   // Construit et lance le conteneur en se basant sur le fichier docker-compose.yml

- Lancer le serveur Go en entrant cette commande dans le dossier Backend :

    go run main.go

- Pour le frontend c'est une autre histoire. Il faut télécharger toute les packages nécessaires et
  Android Studio pour visualiser l'émulation d'un téléphone.

    npx run android

Lorsque tout est lancé, on voit le message de la BDD récupérer par le backend et envoyer au frontend