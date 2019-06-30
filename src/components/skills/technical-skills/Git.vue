<template>
  <div class="article-content">
    <h3>Une compétence incontournable pour les développeurs.</h3>
    <p class="article-paragraph">
      Git est un outil de gestion de version de fichier. Il permet aux équipes d'utiliser des fichiers, de les modifier si besoin, et de fusionner les différentes versions.
    </p>
    <p class="article-paragraph">Il offre aussi des avantages non négligeables. D'une part, il permet d'avoir un ou plusieurs états d'un projet sur un serveur, dans ce qu'on appelle des branches.
      Ces versions sont récupérables à tout moment par les membres du projets. Ces mêmes membres ont aussi une version en local, sur leur machine physique, qui leur permet de travailler sans polluer les versions stables publiées sur le serveur,
      avec la possibilité  de "pousser" leur travail quand ils estiment l'avoir teminé.
    </p>
    <p class="article-paragraph">
      De plus, il permet de conserver un historique de chaque étape de modification. Ainsi, il est aisé de revenir en arrière en cas d'erreur, constater à quel moment est survenu un bug, et tracer le travail de l'équipe.
    </p>
    <p class="article-paragraph">Enfin, si deux membres d'une équipe modifient la même partie d'un fichier, Git indiquera la présence d'un conflit, en montrant la version originelle du fichier, 
      et les modifications apportées par chacun, de sorte qu'il est possible de choisir manuellement les modifications apportées, en tout ou partie.</p>
    
    <h3>Des débuts difficiles</h3>
    <p class="article-paragraph">
      L'outils n'étant pas facile à prendre en main, il m'est arrivé de nombreuses fois de perdre mon travail à mes débuts. Chaque lutté à comprendre chaque notion :
      les branches, les merge, les rebase, les pull request, les conflits...<br/>
      Je peux aujourd'hui suffisamment assez aguérri pour utiliser les fonctionnalités qui me sont utiles sans faire de maladresse.
      D'abord habitué à utiliser une interface graphique pour l'utiliser, j'utilise maintenant dans le cadre professionnel la ligne de commande avec un plugin du nom de <a href="https://www.gerritcodereview.com/" target="_blank">Gerrit</a>.
    </p>
    <p class="article-paragraph"></p>
    <p class="article-paragraph"></p>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
@import 'src/styles/article';
</style>
