<template>
  <div class="article-content">
    <h3>Présentation – Définition</h3>
    <p class="article-paragraph">
      La nuit de l’info est un concours proposé annuellement à une multitude d’écoles d’informatique.
      Les entreprises partenaires proposent un ou plusieurs défis.
      Les étudiants, en équipe, peuvent choisir de relever jusqu’à 6 défis, auxquels ils doivent répondre entre 20h et 8h le lendemain.
    </p>
    <p class="article-paragraph">
      C’est l’occasion pour les entreprises de repérer des talents, et pour les étudiants de gagner les récompenses à la clef des défis, qui peuvent être financières ou matérielles.
    </p>

    <h3>Contexte, enjeu</h3>
    <p class="article-paragraph">
      Nous avons fait le choix de ne relever qu’un défi, pour nous concentrer un maximum dessus et maximiser nos chances.
      L’enjeu était entièrement personnel et pas académique : nous voulions savoir ce que nous étions capables de développer en un laps de temps si court, et comparer ce que nos compétences valent par rapport à celles des ingénieurs des écoles concurrentes.
    </p>

    <h3>Les étapes</h3>
    <p class="article-paragraph">
      Une fois les sujets dévoilés, mon équipe et moi nous sommes concentrés sur le projet de Décathlon, qui imposait le framework front avec lequel nous étions familiés,
      et demandait à avoir un back. Etant donné que nous étions 2 developpeurs axés front, et 2 développeurs axés back, nous avons de suite vu l'opportunité de faire
      quelque chose.
    </p>
    <p class="article-paragraph">
      Après avoir brainstormé sur les idées que nous avions et sur le schéma de navigation de notre application, nous avons pu mettre en place nos outils 
      de travail collaboratif et avons commencé à coder, toute la nuit.
    </p>

    <h3>Les résultats</h3>
    <p class="article-paragraph">
      Nous avons terminé le projet à 8h du matin, en tout nous avons passé 12h de travail, à 4, pour produire une application terminée. Celle-ci répondait aux critères
      qui nous étaient imposés, et contenait les fonctionnalités que nous nous étions fixées. Au final, nous avons fini en première place lors de ce défi, sur 28 équipes
      s'affrontant.
    </p>

    <h3>Mes apports sur le projet, ma valeur ajoutée, les enseignements tirés</h3>
    <p class="article-paragraph">
      La difficulté a été de prioriser les tâches, trouver le bon équilibre entre une interface agréable, des fonctionnalités robustes, et une architecture simple et efficace.
      Au terme dizaine d'heures de travail, nous avons pu constater fièrement le travail abattu, qui plus est après une journée de travail complète dans nos entreprises respectives.
    </p>
    <p class="article-paragraph">
      J'ai pu me rendre compte que j'ai acquis des bases solides dans l'architecture d'un projet front, en mettant en place efficacement un router, un store, et différents fichiers helpers qui nous ont servi à faire des appels asynchrones à notre serveur, mais qui recensaient aussi des fonctions globales au projet.
    </p>
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
@import 'src/styles/article'
</style>
