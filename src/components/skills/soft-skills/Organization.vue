<template>
  <div class="article-content">
    <h2 class="article-title">Organisation</h2>
    <img src="../../../assets/article-covers/organization.svg" alt="" class="article-cover">
    <h3>Définition</h3>
    <p class="article-paragraph">
      L'organisation est l'aptitude à définir les priorité, et à classer d'une manière logique des éléments de façon à les retrouver facilement.
    </p>
    <h3>Indispensable pour travailler en groupe</h3>
    <p class="article-paragraph">
      Dès lors qu'on ne travaille plus seul, il est important d'établir des règles communes aux différentes parties prenantes du projet.
      Il peut s'agir des bonnes pratiques de développement, du rangement du matériel, mais surtout,
      il est primordial que tout le monde soit assidu sur l'organisation des fichiers communs (sur le drive d'équipe par exemple).
      Des fichiers sont fréquemment utilisés par différentes équipes, comme l'équipe mobile, l'équipe design, l'équipe SaaS.
    </p>
    <h3>Dans la pratique, une qualité salvatrice.</h3>
    <p class="article-paragraph">
      Utile au quotidien comme dans le milieu professionnel, une bonne organisation peut permettre de se sortir d'une situation d'urgence inextricable.
      En effet, réussir à discerner ce qui peut être vite fait et bien fait, permet de voir plus clair sur l'ensemble des tâches à faire,
      faisant ainsi descendre la pression sur les éventuels délais à tenir. 
    </p>
    <p class="article-paragraph">
      Cela a pu me sauver lors de la réponse à un appel d'offre, en travaillant sur les <router-link :to="{ name: 'saasKaros' }" >SaaS de Karos</router-link>.
      L'enjeu était de taille, car l'avenir de la société se jouait en grande partie sur la réussite de cette réponse.
      Or, la liste de fonctionnalités à produire était interminable, et le temps très court.
      Nous avons décidé de développer d'abord les pages nécessitant peu de contenu, pour que les plateformes aient l'air complète le plus vite possible.
      J'ai dans un premier temps priorisé l'aspect technique en laissant de côté le côté visuel.
      Après la vague de stress passée, j'ai pu m'attarder, avec mes collègues, sur les fichiers de styles afin d'avoir une plateforme fonctionnelle,
      doublée d'une plateforme facile d'utilisation et au design attractif.
      Afin de traiter au mieux les tâches, et de les prioriser, nous avons continué à utiliser l'outil Trello.
    </p>
    <div class="related-articles-container">
      <h3 class="related-articles-title">Voir aussi :</h3>
      <div class="articles-chips-container">
        <router-link class="article-chip" :to="{ name: 'saasKaros'}">SaaS Karos</router-link>
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
@import 'src/styles/article.scss';
</style>
