<template>
  <div class="article-content">
    <h2 class="article-title">Astek Project Manager</h2>
    <p class="article-paragraph">
      APM est un outil de gestion de projet développé en interne par la société Astek. Destiné pour être utilisé à l’échelle nationale, il s’inspire de la méthode Kanban qui permet de visualiser les différentes tâches dans un board.
    </p>
    <h3>Objectifs :</h3>
    <p class="article-paragraph">
      <ul>
        <li>Créer des tableaux personnalisables, permettant d’ajouter colonnes et swimlanes,</li>
        <li>Ajouter des tâches attribuables à une ou plusieurs personnes,</li>
        <li>Association de commentaires et de documents aux tâches,</li>
        <li>Gestion des statuts et du temps des tâches</li>
        <li>Générer un reporting de la gestion des projets au format CSV</li>
        <li>Gestion des droits des utilisateurs</li>
      </ul>
    </p>
    <h3>Contexte, enjeu :</h3>
    <p class="article-paragraph">
      Les projets chez Astek sont suivis par différents outils de gestion selon les sites, voire selon les équipes, aucun n’étant assez polyvalent. Il a donc été décidé d’unifier les pratiques sur une seule et unique plateforme afin que les projets puissent être supportés plus simplement par plusieurs équipes, gérant l’ensemble des règles de gestion recensées, et ce sur l’ensemble du groupe Astek.
      Le besoin a donc dû être examiné avec précision, pour permettre à chacun d’appliquer les règles en cours sur les projets existants.
    </p>
    <h3>Les étapes :</h3>
    <p class="article-paragraph">
      Une première phase de spécification a précédé le développement technique. L’équipe de développement y a participé afin que l’on ait bien en mémoire les différentes fonctionnalités à développer et leur priorisation, que l’on donne notre avis sur la complexité technique, et que l’on estime leur coût de développement.
      L’architecture du projet a été faîte par un expert technique en Angular et en .Net, ce qui nous a permis de travailler sur une base solide. 
    </p>
    <p class="article-paragraph">
      Accompagné d’un UX/UI designer, je suis monté en compétences sur ma toute première technologie frontend.
      Nous faisions des stand-up meetings qui nous ont permis de suivre l’avancée de chacun, mais également des réunions hebdomadaires avec le Product Owner accompagnées de démonstrations des développements de la semaine passée.
    </p>
    <h3>Acteurs :</h3>
    <p class="article-paragraph">
      Un chef de projet assurait notre équipe de développement et de conception, constituée de :
      <ul>
        <li>2 développeurs frontend</li>
        <li>2 développeurs backend</li>
        <li>1 UX/UI designer</li>
      </ul>
      Il faisait également le lien entre le Product Owner et nous.
    </p>

    <h3>Les résultats :</h3>
    <p class="article-paragraph">
      Dans les 4 mois qui ont précédés la fin de mon expérience chez Astek, nous avons eu le temps de mettre en place les fonctionnalités principales que l’on peut retrouver dans la méthode Kanban.
      La partie graphique et gestion des droits restaient encore grandement à améliorer.
    </p>
    <h3>Les lendemains du projet.</h3>
    <p class="article-paragraph">
      Selon le planning initial établi, nous avons développé environ un douzième de la plateforme telle qu’elle aurait été à son état final. Après un transfert de connaissances d’une semaine, une autre équipe a pris les rênes.
    </p>
    <h3>Mes apports sur le projet, ma valeur ajoutée, les enseignements tirés :</h3>
    <p class="article-paragraph">
      L’occasion a été parfaite pour faire la transition entre le développeur backend que j’étais vers le développeur frontend que je suis aujourd’hui.
      A ce jour, j’ai donc pratiqué deux des trois frameworks javascripts dominant le marché : Angular et Vuejs.
    </p>
    <div class="related-articles-container">
      <h3 class="related-articles-title">Voir aussi :</h3>
      <div class="articles-chips-container">
        <router-link class="article-chip" :to="{ name: 'openMinded' }">Ouverture aux autres</router-link>
      </div>
    </div>
    <div class="articles-links-buttons">
      <router-link class="article-link-btn" :to="{ name: 'realisations' }">Retour aux réalisations</router-link>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
@import 'src/styles/article';
</style>
