<template>
  <div class="article-content">
    <h2 class="article-title">C#</h2>
    <img src="../../../assets/article-covers/cSharp.svg" alt="" class="article-cover">
    <p class="article-paragraph">
      Le C# est un langage orienté objet supporté par Microsoft. Il permet notamment de créer des applications en client lourd, des serveurs web, des bibliothèques de classe, et même dorénavant des applications mobiles natives ou cross-plateformes via le framework Xamarin.
    </p>
    <h3>Une inititation aux projets</h3>
    <p class="article-paragraph">
      Un cours en est dispensé au cours du 3ème semestre d'IN'TECH. Il m'a permis de bâtir des bases solides, et d'assimiler de nombreuses notions communes à différents langages.
      Durant 3 semestres, j'ai pu entretenir et approfondir les compétences acquises.
    </p>
    <p class="article-paragraph">
      A travers un premier projet, <i>Chick'End</i>, je me suis fait la main en développant avec mon équipe un jeu en client lourd, créant des interactions entre différentes classes, implémentant des interfaces, et créant des interfaces graphiques.<br/>
      Plus tard, le projet <router-link :to="{ name: 'omega' }">Omega</router-link> m'a permis de rentrer dans l'univers du Web. Faisant des appels aux APIs de Facebook, Spotify et Deezer, établissant une connexion sécurisée, et stockant les données dans des Tables Azure, mon premier serveur web a vu le jour.
    </p>
    <p class="article-paragraph">
      Mon stage chez <i>Axones</i> m'a permis de découvrir la dernière grande facette du C#, en développant un POC (Proof Of Concept) d'application mobile pour Transdev en Xamarin.
    </p>
    <h3>Une compétence à entretenir pour le futur</h3>
    <p class="article-paragraph">
      Bien que ce ne soit pas une technologie que j'utilise au quotidien, ni que je maîtrise à la perfection, j'ai acquis des bases suffisantes pour pouvoir être autonome, et atteindre mon but à long terme :
      maîtriser une technologie des différentes stacks pour me permettre d'être totalement autonome sur un potentiel projet personnel.
    </p>
    <div class="related-articles-container">
      <h3 class="related-articles-title">Voir aussi :</h3>
      <div class="articles-chips-container">
        <router-link class="article-chip" :to="{ name: 'omega'}">Omega</router-link>
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
</style>
