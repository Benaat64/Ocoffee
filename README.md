# O'Coffee

Ceci était un exercice pendant ma formation Full-Stack JS chez O'Clock. L'exercice consistait à créer un site vitrine basé sur les demandes du client : 
[Le projet](./docs/demande-client/)

## Table des matières
1. [Description](#description)
2. [Technologies](#technologies)
3. [Installation](#installation)
4. [Utilisation](#utilisation)
5. [Fonctionnalités](#fonctionnalités)
6. [Captures d'écran](#captures-décran)
7. [Hard Skills](#hard-skills)
8. [Licence](#licence)

## Description

O'Coffee est un site vitrine pour une entreprise fictive de café. Le site a été développé pour répondre à des exigences spécifiques du client et inclut des fonctionnalités dynamiques et une intégration responsive.

## Technologies

La stack utilisée pour ce projet comprend :

- HTML
- CSS
- JavaScript
- Node.js
- EJS
- PostgreSQL

## Installation

Pour exécuter ce projet localement, suivez les étapes ci-dessous :

1. Clonez le dépôt :
   ```sh
   git clone git@github.com:Benaat64/Ocoffee.git
   ```
   
2. Accédez au répertoire du projet :
   ```sh
   cd Ocoffee
   ```

3. Installez les dépendances : :
   ```sh
   npm install
   ```
4. Créez un fichier .env à la racine du projet et configurez-le avec vos informations de base de données et de serveur. Voici un exemple de configuration :
   ```sh
   DB_HOST=localhost
   DB_USER=your_username
   DB_PORT=5432
   DB_NAME=your_database_name
   DB_PASSWORD=your_password
   PORT=3000
   ```
5. Créez la base de données et exécutez le script SQL 
Connectez-vous à PostgreSQL avec l'utilisateur approprié et créez une nouvelle base de données (si ce n'est pas déjà fait) :
   ```sh
   psql -U your_username -c "CREATE DATABASE your_database_name;"
   ```
   Exécutez le script SQL pour créer les tables nécessaires :
   ```sh
   psql -U your_username -d your_database_name -f data/create_db.sql  
   ```
6. Démarrez le serveur :
   ```sh
   npm start
   ```
## Utilisation

Après avoir démarré le serveur, ouvrez votre navigateur et allez à l'adresse `http://localhost:3000` (ou au port que vous avez configuré dans le fichier `.env`) pour voir le site en action.


## Fonctionnalités

- Site vitrine responsive
- Contenu dynamique généré à partir de la base de données
- Architecture MVC
- Connexion à une base de données PostgreSQL

## Hard Skills

- Développement d'une intégration d'un site vitrine responsive
- Développement d'une interface aux contenus générés dynamiquement
- Mise

