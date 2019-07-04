<template>
  <div class="article-content">
    <h3>Définition</h3>
    <p class="article-paragraph">
      Le HTML, pour <i>Hypertext Markup Language,</i> est un langage de balisage conçu pour structurer et représenter les sites web, sous la structure d'un arbre.
      Souvent utilisé en association avec le javascript et indissociablement du CSS (<i>Cascading Style Sheets</i>) pour la mise en page et les animations graphique.
    </p>

    <h3>Un apprentissage en autodidacte</h3>
    <p class="article-paragraph">
      Le web est un univers ou règne la bidouille. Il n'y a pas de difficulté technique importante dans ces deux disciplines, c'est donc avec aisance que je me suis approprié ces deux atouts.
      La subtilité consiste à conserver un code lisible, compréhensible en une lecture, et facilement éditable par autrui.
    </p>
    <p class="article-paragraph">
      Le design d'interface graphique <i>(appelé User Interface design)</i> et leurs intéractions avec le système <i>(appelé User eXperience design)</i> sont des disciplines à part entière.
      Leur apprentissage doit être quotidien, car les tendances et les normes changent constamment. Etant récemment arrivé dans l'univers du développement frontend, je suis encore novice en la matière.
    </p>
    <p class="article-paragraph">
      Cependant, j'ai développé une aptitude certaine en ce qui concerne l'intégration, c'est à dire la mise en forme d'interfaces basée sur une maquette.
      Le premier réel challenge auquel j'ai été confronté a été le développement d'un <a href="https://codepen.io/fixesuarez/pen/pQZXKy" target="_blank">indicateur de chargement</a> visible sur les <router-link :to="{ name: 'saasKaros' }">SaaS</router-link>  de Karos.
      Je suis aujourd'hui plutôt à l'aise pour reproduire un design au pixel près.
    </p>

    <h3>En quête d'approfondissement</h3>
    <p class="article-paragraph">
      Que ce soit pour le HTML ou le CSS, il existe des préprocesseur qui permettent d'utiliser d'autres syntaxes. Je ne connais à ce jour pas leurs avantages et leurs inconvénients (si toutefois ils en ont).
    </p>
    <p class="article-paragraph">
      A ma charge donc, pour les temps à venir de prendre le temps de me documenter à leur sujet, mais également de me pencher sur les fonctionnalités les plus avancées de ces deux langages, qui même si rarement utilisées, pourraient m'être fortes utiles.
    </p>
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
