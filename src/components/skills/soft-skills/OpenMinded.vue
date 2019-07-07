<template>
  <div class="article-content">
    <h2 class="article-title">Ouverture aux autres</h2>
    <img src="../../../assets/article-covers/open-minded.svg" alt="" class="article-cover">
    <p class="article-paragraph">
      Que ce soit dans la vie professionnelle ou dans un cadre plus personnel, j’ai pour habitude de recueillir les opinions de mon entourage lorsqu’une problématique émerge, en essayant de trouver un maximum d’avis divergents.
    </p>
    <p class="article-paragraph">
      Je les analyse, essaye de les confronter pour retenir tous les arguments, pour prendre un maximum de recul et proposer une solution qui ralliera l’ensemble des partie prenantes. 
    </p>

    <h3>A l’écoute dans la vie professionnelle</h3>
    <p class="article-paragraph">
      C’est arrivé notamment sur la phase d’étude d’un projet où il a fallu faire un choix de technologie pour optimiser les performances et le temps de développement.
      Faisant partie d’une équipe de développeurs, j’ai réalisé une partie des tests et me suis tenu au courant de leurs avancées pour exprimer à la fin mon avis sur la solution la plus viable.
    </p>
    <p class="article-paragraph">
      D’autre part, pour améliorer le cadre de vie au quotidien dans l’entreprise, j’ai su écouter les réflexions des collègues pour rendre plus chaleureux les espaces de travail et les moments de détente comme le déjeuner, mais aussi renforcer la cohésion en périphérie des horaires de travail.
    </p>
    <h3>A l’avenir</h3>
    <p class="article-paragraph">
      Il est fort possible qu’après un début de carrière en tant que développeur, j’exprime le souhait de de faire varier mes missions. N’étant pas encore fixé, les deux évolutions naturelles qui s’offrent à moi seraient de devenir chef de projet ou ingénieur d’affaire. Dans les deux cas, il sera nécessaire d’être en lien avec les clients externes, les équipes de développeurs, et les personnes qui expriment leurs besoins.
    </p>
    <div class="related-articles-container">
      <h3 class="related-articles-title">Voir aussi :</h3>
      <div class="articles-chips-container">
        <router-link class="article-chip" :to="{ name: 'omega'}">Omega</router-link>
        <router-link class="article-chip" :to="{ name: 'goodMood'}">Bonne humeur</router-link>
      </div>
    </div>
    <div class="articles-links-buttons">
      <router-link class="article-link-btn" :to="{ name: 'skills' }">Retour aux compétences</router-link>
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
