<template>
  <div class="article-content">
    <h3>Définition</h3>
    <p class="article-paragraph">
      La bonne humeur est l'état d'esprit momentané d'une personne qui fait permet aux autres de ressentir passivement son bien-être.
    </p>

    <h3>Un impact sur mon quotidien</h3>
    <p class="article-paragraph">
      J'ai remarqué il y a plusieurs années déjà que les humeurs de mon entourage influencent de façon non négligeable la fatigue que je ressens.
      Les périodes de vacances comparé aux journées travaillées en sont un parfait exemple.
      En effet, une journée lourde en activité pendant des congés aura certe un impact sur ma condition physique, 
      mais la fatigue mentale que je ressentirai sera bien plus importante après une journée de travail où je serai resté statique, si l'atmosphère est lourde.
    </p>
    <p class="article-paragraph">
      C'est pourquoi, je m'efforce chaque jour de paraître de bonne humeur, souriant et avenant, tout d'abord pour essayer de faire en sorte de ne pas faire subir une fatigue supplémentaire à mon entourage,
      mais aussi dans l'espoir que celle-ci sera contagieuse, et qu'on m'enverra en retour de l'énergie positive.
    </p>
    <p class="article-paragraph">
      Cependant, les efforts que je fournis toute la journée pour afficher cette bonheur apparente, parfois en la forçant, engendrent également leurs lots d'épuisement.
      Je ressens cette fatigue quand la "pression sociale" se relache, pas forcément en fin de journée de travail, mais une fois que je suis chez moi sans convives.
    </p>

    <h3 class="article-quote">“Mais toi de toutes façons, tu es toujours de bonne humeur !”</h3>
    <p class="article-paragraph">
      C'est au détour de conversations très innocentes que j'entends ce genre de réflexions, qui m'encouragent plus encore à continuer mes efforts, m'indiquant qu'ils ont déjà porté leurs fruits.
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
