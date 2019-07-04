<template>
  <div class="article-content">
    <h2 class="article-title">Organisation</h2>
    <img src="../../../assets/article-covers/organization.svg" alt="" class="article-cover">
    <h3>Définition</h3>
    <p class="article-paragraph">
      L'organisation est l'aptitude à définir les priorité, et à classer d'une manière logique des éléments de façon à les retrouver facilement.
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
@import 'src/styles/article.scss';
</style>
