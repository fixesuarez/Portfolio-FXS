<template>
  <div class="article-content">
    <h2 class="article-title">Vuejs</h2>
    <img src="../../../assets/article-covers/vuejs.svg" alt="" class="article-cover">
    <p class="article-paragraph">
      Vuejs un l’un des 3 principaux framework javascript qui permet de développer la partie frontend des applications web, aux côtés d’Angular et React.
      Bien qu’il soit à ce jour moins utilisé que ces derniers dans les projets professionnels, la communauté est sans cesse grandissante, et le nombre de « Stars » sur GitHub a dépassé celui de React, supporté par Facebook.
      Cela laisse penser qu'un bel avenir lui est promis.
    </p>
    <h3>Un changement de cap</h3>
      <p class="article-paragraph">
        Pendant mon parcours étudiant, j’ai été formé sur des technologies orientées backend, mais une partie de mes équipes de projet évoluaient déjà sur Vuejs, à l’époque 1.0.
        En ce qui me concerne, j’ai pris le tournant vers le développement frontend avec mes premières expériences professionnelles en me formant sur Angular pendant mon stage.
        C’est quand j’ai passé les entretiens chez Karos que je me suis fait la main sur Vuejs, en l’espace d’une ou deux semaines pour répondre à un test technique.
      </p>
    <h3>Une pratique désormais intensive</h3>
    <p class="article-paragraph">
      C’est une technologie que je pratique depuis lors quotidiennement pour faire évoluer les <router-link :to="{ name: 'saasKaros' }">SaaS</router-link> que l’on vend à nos clients.
      J’ai à ce jour une autonomie suffisante pour pouvoir réaliser de grosses évolutions et n’importe quelle opération de maintenance. Avant d’arriver à ce stade, il m’a fallu environ 6 mois d’apprentissage technique et d’appropriation de la base de code.
      J’ai également eu l’occasion de m’exercer durant la <router-link :to="{ name: 'nuit-info' }">Nuit de l’Info</router-link>.
      Aujourd’hui, la connaissance que j’en ai est essentiellement fonctionnelle, mais j’aspire à en apprendre les fonctionnalités les plus poussées, voire à étudier comment le framework a été conçu, et les principes de conception sur lesquels il repose. 
    </p>
    <div class="related-articles-container">
      <h3 class="related-articles-title">Voir aussi :</h3>
      <div class="articles-chips-container">
        <router-link class="article-chip" :to="{ name: 'omega'}">Omega</router-link>
        <router-link class="article-chip" :to="{ name: 'saasKaros'}">SaaS Karos</router-link>
        <router-link class="article-chip" :to="{ name: 'nuit-info'}">Nuit de l'info</router-link>
        <router-link class="article-chip" :to="{ name: 'htmlCss'}">HTML / CSS</router-link>
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
@import 'src/styles/article'
</style>
