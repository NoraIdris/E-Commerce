Projet E-commerce avec Django REST Framework et React.js (en cours)

Ce projet est une plateforme e-commerce développée avec Django REST Framework pour le backend et React.js avec Redux pour le frontend.

Ce projet est la continuation d'un projet collectif réalisé en deux semaines à Ada Tech School lien: https://github.com/orgs/adatechschool/teams/ike-hack

L'application permet aux utilisateurs de naviguer, rechercher et acheter des meubles en ligne.

---
#Table des Matières:

Fonctionnalités

Technologies Utilisées

Prérequis

Installation

Configuration

Utilisation

Contribuer

----
#Fonctionnalités

API RESTful :
Backend construit avec Django REST Framework pour gérer les données des utilisateurs et des produits.

Gestion des Utilisateurs : 
Système d'authentification sécurisé avec création de compte et connexion.

Panier d'Achat : 
Fonctionnalité permettant aux utilisateurs d'ajouter des articles à leur panier.

Recherche et Filtrage : 
Options de recherche et filtrage avancées pour une navigation facile.

Design Réactif : 
Interface utilisateur adaptée aux appareils mobiles et de bureau.

----
#Technologies Utilisées:

Backend : Django, Django REST Framework

Frontend : React.js, Redux

Base de Données : PostgreSQL (ou autre selon votre choix)

Gestion de Versions : Git, GitHub

---
#Prérequis:

Avant de commencer, assurez-vous d'avoir installé les éléments suivants sur votre machine :

Python (v3.12)

Node.js (v20)

npm ou Yarn

----
#Installation:

<--- Backend (Django) --->

1- Cloner le dépôt :

bash

git clone https://github.com/votre-nom-utilisateur/votre-nom-de-repo.git

cd votre-nom-de-repo/backend

2- Créer un environnement virtuel :

bash

python -m venv env

source env/bin/activate    # Sur macOS/Linux

.\env\Scripts\activate     # Sur Windows

3- Installer les dépendances :

bash

pip install -r requirements.txt

4- Configurer la base de données :

Modifiez le fichier settings.py pour configurer votre base de données.

5- Migrer la base de données :

bash

python manage.py migrate

6- Créer un super utilisateur :

bash

python manage.py createsuperuser

7- Démarrer le serveur :

bash

python manage.py runserver

-------------------------

<--- Frontend (React.js) --->

1- Naviguer vers le dossier frontend :

bash

cd ../frontend

2- Installer les dépendances :

bash

npm install

3- Démarrer le serveur de développement :

bash

npm start

-----
#Configuration:

URL de l'API :

Assurez-vous que l'URL de votre API est correctement configurée dans le code frontend (habituellement dans le fichier .

env ou directement dans les fichiers de configuration de Redux).

----

#Utilisation:

Ouvrez votre navigateur et allez à http://localhost:3000 pour accéder à l'application.

Utilisez les identifiants du super utilisateur pour vous connecter à l'interface d'administration à http://localhost:8000/admin.

----
#Contribuer:

Les contributions sont les bienvenues ! Pour contribuer, suivez ces étapes :

1- Forkez le projet

2- Créez votre branche de fonctionnalité (git checkout -b feature/VotreFonctionnalité)

3- Engagez vos modifications (git commit -m 'Ajout de VotreFonctionnalité')

4- Poussez vers la branche (git push origin feature/VotreFonctionnalité)

5- Ouvrez une demande de tirage



