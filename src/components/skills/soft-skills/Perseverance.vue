<template>
  <div class="article-content">
    <h2 class="article-title">Persévérance</h2>
    <img src="../../../assets/article-covers/perseverence.svg" alt="" class="article-cover">
    <p class="article-paragraph">La persévérance est ce qui permet à ceux qui en font preuve d'atteindre leurs objectifs en dépit des difficultés, qu'elles soient techniques ou contextuelles.</p>
    <h3>Actualité et valeur</h3>
    <p class="article-paragraph">
      Souvent requise par les entreprises, elle est pour moi étroitement liée avec l'autonomie.
      En effet, tout développeur doit aujourd'hui être en mesure surmonter les embûches, qui sont sur sa route.
      Celles-ci peuvent être de nature très diverses:
      <ul>
        <li>Les difficultés techniques quotidiennes,</li>
        <li>Le recueil des besoins du client,</li>
        <li>Les choix d'architecture...</li>
      </ul>
      Toute réussite précédée de difficulté procure soit un soulagement et/ou un sentiment de satisfaction, qui permet d'accentuer la soif d'apprendre et qui, quelque part, flatte l'ego du développeur victorieux.
    </p>
    <h3>Situations concrètes</h3>
    <h4>Oméga</h4>
    <p class="article-paragraph">
      Lors d'un projet étudiant, j'ai été chargé de m'occuper de l'authentification à différentes plateformes. Afin de respecter les normes de sécurité, il m'a fallu plonger dans une profonde documentation, mais aussi faire face à d'innombrables bugs, pour lesquels j'ai pris un retard considérable sur la suite du projet.
      <br>Fort heureusement, j'ai été si satisfait de la réussite finale que cela m'a motivé par la suite à rattraper presque deux semaines de retard accumulées, en lissant mes efforts sur seulement un mois.
      Ces derniers ont porté leur fruits, et les membres de l'équipe en ayant également fourni en quantité non négligeable, le projet a été reconnu comme le plus abouti sur les 45 projets présentés par l'ensemble des étudiants de l'école.
    </p>
    <h4>Apprentissage d'Angular</h4>
    <p class="article-paragraph">
      Arrivé en alternance, j'ai été positionné sur un projet interne, co-responsable de la partie front-end.
      Ayant suivi une formation exclusivement sur le backend et n'ayant alors pas de référent technique, il m'a fallu me former seul depuis les connaissances les plus basique, dans l'optique d'utiliser un framework javascript puissant et relativement complexe, pour lequel la courbe d'apprentissage n'est pas la plus douce.
      <br>Faisant face à de nombreuses difficultés liées au framework en lui-même, l'apprentissage du TypeScript, ou la prise en main du Sass, je suis finalement parvenu à prendre le lead et devenir finalement le référent en matière d'UI ou d'intégration.
    </p>
    <h3>Regard critique</h3>
    <p class="article-paragraph">
      J'ai le sentiment que la persévérance fait partie intégrante de mon caractère.
      Cependant, je suis aujourd'hui conscient et j'essaie d'améliorer mon comportement en réaction aux difficultés que je rencontre.
      En effet, j'ai tendance à trop me disperser au tout début et trouver la source du problème.
      Par ailleurs, je me serais parfois épargné d'importantes pertes de temps si j'avais été cherché de l'aide plutôt que d'essayer de trouver la solution par moi-même.
    </p>
    <div class="related-articles-container">
      <h3 class="related-articles-title">Voir aussi :</h3>
      <div class="articles-chips-container">
        <router-link class="article-chip" :to="{ name: 'omega'}">Omega</router-link>
        <router-link class="article-chip" :to="{ name: 'saasKaros'}">SaaS Karos</router-link>
        <router-link class="article-chip" :to="{ name: 'nuit-info'}">Nuit de l'info</router-link>
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
h4 {
  margin-bottom: 5px;
  font-size: 26px;
  color: #3c3c3c;
}
h4 + .article-paragraph {
  margin-top: 0;
}
</style>