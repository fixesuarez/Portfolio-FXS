<template>
  <div class="article-content">
    <h2 class="article-title">Bonne humeur</h2>
    <img src="../../../assets/article-covers/good-mood.svg" alt="" class="article-cover">
    <p class="article-paragraph">
      La bonne humeur est l'état d'esprit momentané d'une personne qui fait permet aux autres de ressentir passivement son bien-être.
    </p>

    <h3>Un impact sur mon quotidien</h3>
    <p class="article-paragraph">
      J'ai remarqué il y a plusieurs années déjà que les humeurs de mon entourage influencent de façon non négligeable la fatigue que je ressens.
      Les périodes de vacances comparées aux journées travaillées en sont un parfait exemple.
      En effet, une journée lourde en activité pendant des congés aura certes un impact sur ma condition physique.
      Mais la fatigue mentale que je ressentirai sera bien plus importante après une journée de travail où je serais resté statique dans une atmosphère lourde.
    </p>
    <p class="article-paragraph">
      C'est pourquoi, je m'efforce chaque jour de paraître de bonne humeur, souriant et avenant.
      Tout d'abord pour essayer de faire en sorte de ne pas faire subir une fatigue supplémentaire à mon entourage,
      mais aussi dans l'espoir que celle-ci sera contagieuse, et qu'on m'enverra en retour de l'énergie positive.
    </p>
    <p class="article-paragraph">
      Cependant, les efforts que je fournis toute la journée pour afficher cette bonne humeur apparente, parfois en la forçant, engendrent également leurs lots d'épuisement.
      Je ressens cette fatigue quand la "pression sociale" se relâche, pas forcément en fin de journée de travail, mais une fois que je suis chez moi sans convives.
    </p>

    <h3 class="article-quote">“Mais toi de toutes façons, tu es toujours de bonne humeur !”</h3>
    <p class="article-paragraph">
      C'est au détour de conversations très innocentes que j'entends ce genre de réflexions, qui m'encouragent plus encore à continuer mes efforts, m'indiquant qu'ils ont déjà porté leurs fruits.
    </p>
    <div class="related-articles-container">
      <h3 class="related-articles-title">Voir aussi :</h3>
      <div class="articles-chips-container">
        <router-link class="article-chip" :to="{ name: 'afk'}">A.F.K.</router-link>
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
