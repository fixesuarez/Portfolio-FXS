<template>
  <div class="article-content">
    <h3>Présentation – Définition :</h3>
    <p class="article-paragraph">
      Oméga est une application web qui permet à ses utilisateurs de retrouver les playlists de différentes plateformes de streaming telles que Deezer et Spotify de leurs amis, et de les mixer aux leurs en sélectionnant jusqu’à 9 critères (instrumentalité, verbosité, joie, rythme, …).
    </p>

    <h3>Objectifs :</h3>
    <p class="article-paragraph">
      <ul>
        <li>Pouvoir s’authentifier via Facebook, Deezer et Spotify</li>
        <li>Pouvoir récupérer les playlists et leurs titres afin de pouvoir créer des mixes</li>
        <li>Pouvoir enregistrer et partager les playlists générées</li>
        <li>Trier les titres en se basant sur différents critères fournis par l’API d’AFT, rachetée par Spotify (Audio Feature for a Track)</li>
      </ul>
    </p>
    
    <h3>Contexte, enjeu :</h3>
    <p class="article-paragraph">
      Le projet a été proposé par un client, le principe étant de prouver que le concept était réalisable.
      Dans les promotions précédentes, le sujet avait déjà été pris deux fois sans jamais atteindre un niveau acceptable aux yeux du client.
      Nous avons, avec mon équipe, décidé de relever le défi et d’essayer de développer un « POC » (Proof of Concept), en l’espace de 4 mois.
    </p>
    <p class="article-paragraph">
      Vis-à-vis des différentes applications auxquelles nous étions dépendantes, il nous a fallu être particulièrement vigilent à leurs conditions d’utilisation, que ce soit dans les aspects légaux ou en nombre de requêtes à envoyer à leurs API.
    </p>

    <div class="article-image-container">
      <img src="../../assets/article-images/omega_instruments.jpg" alt="" class="article-image">
    </div>

    <h3>Les étapes :</h3>
    <p class="article-paragraph">
      Dans un premier temps, je me suis occupé de la connexion aux différentes API qu’étaient Spotify, Deezer et Facebook, en respectant le protocole OAuth 2.0 afin que les utilisateurs puissent se connecter en toute sérénité sans craindre la fuite de leurs informations personnelles.
    </p>
    <p class="article-paragraph">
      Ensuite, je me suis occupé de mettre en place une chaîne de build afin de faciliter la mise en production des nouvelles versions du projet.
      Enfin, j’ai été en charge de la base de données de notre serveur, depuis la création du modèle de données, jusqu’au traitement des données (insertion, mises à jour, suppression et lecture), ainsi que de la communication avec le client (navigateur web).
    </p>
    <p class="article-paragraph">
      D’un point de vue technique, nous avons utilisé .Net Core 1.1, qui était alors la dernière version du framework, pour que notre solution puisse être déployée sur tous les systèmes d’exploitation, aussi bien Unix que Windows. Nous avons choisi de stocker nos données dans des Big Tables Azure, afin que les données soient dans le Cloud.
    </p>

    <h3>Acteurs :</h3>
    <p class="article-paragraph">
      Nous étions une équipe de 4 développeurs divisée en deux :
      <ul>
        <li>Deux s’occupant de la partie Front (dont le chef de projet),</li>
        <li>Deux s’occupant du backend, dont moi.</li>
      </ul>
      Nous pouvions nous appuyer sur deux professeurs d’un point de vue technique, et nous pouvions contacter le client dès que nous avions des questions sur les approches fonctionnelles de l’application.
    </p>

    <h3>Les résultats :</h3>
    <p class="article-paragraph">
      Nous avons réussi à aller au-delà du POC prévu, en aboutissant sur une version stable de l’application. A la fin du semestre, nous avons été évalués par trois jurys composés de professionnels, qui nous ont attribué la première place parmi plus de 45 projets.
    </p>

    <div class="article-image-container">
      <img src="../../assets/article-images/omega_victory.jpg" alt="" class="article-image">
    </div>

    <h3>Les lendemains du projet.</h3>
    <p class="article-paragraph">
      Nous avons aujourd’hui pour ambition de recommencer les projets depuis zéro afin de passer sur .Net Core 2.0, qui est bien plus maintenable.
      Les librairies que nous avions utilisées à l’époque ne sont plus compatibles, et nous pourrions hautement gagner en performance en cas d’utilisation massive de notre application.
    </p>
    <p class="article-paragraph">
      De plus, une refonte graphique totale ferait le plus grand bien, et nous pourrions en profiter pour fluidifier la navigation.
      Enfin, il serait plus qu’envisageable de créer une version mobile du projet pour maximiser ses chances d’utilisation.
    </p>
    <h3>Mes apports sur le projet, ma valeur ajoutée, les enseignements tirés :</h3>
    <p class="article-paragraph">
      J’ai été le <a routerLink="../../skills/communication">principal contact</a> avec l’équipe frontend, pour ce qui a été des informations que nous devions demander aux API, mais aussi les informations à transmettre au client pour l’affichage.
      J’ai été confronté à des contraintes de sécurité, notamment pour la gestion de l’authentification. A ce niveau, j’ai également géré une « unification des comptes », pour que l’utilisateur n’ait pas besoin de s’authentifier à Deezer, Spotify ET Facebook tour à tour.
      Aujourd’hui, j’ai acquis les compétences techniques de bases pour pouvoir utiliser le C# pour l’appliquer au développement d’un serveur web.
    </p>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
@import 'src/styles/article';
</style>