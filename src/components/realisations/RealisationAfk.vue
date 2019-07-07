<template>
  <div class="article-content">
    <h2 class="article-title">Away From Keyboard</h2>
    <div class="image-container">
      <img src="../../assets/card-images/afk.png" alt="" class="article-cover">
    </div>
    <p class="article-paragraph">
      Durant le 4ème semestre d’IN’TECH, les étudiants doivent organiser dans le cadre de leur cursus, un évènement de leur choix de A à Z.
      Avec mon équipe, nous avons décidé d’organiser un tournoi sportif multi-disciplinaire, faisant s’affronter les participants sur de l’accrobranche, du bowling, et du bubble soccer.
    </p>

    <h3>Objectifs</h3>
    <p class="article-paragraph">
      <ul>
        <li>Réunir un minimum de 20 participants</li>
        <li>Réduire à 5€ la participation à chaque activité</li>
        <li>Offrir des lots aux vainqueurs</li>
      </ul>
    </p>

    <h3>Contexte, enjeu</h3>
    <p class="article-paragraph">
      La plupart du temps, les évènements proposés par les étudiants sont proposés à un public extérieur à l’école.
      S’ils ne le sont pas, ils mettent les étudiants dans un rôle passif, de spectateur.
      Notre volonté était donc de briser ces habitudes, dynamiser les étudiants en les éloignant de leur clavier et casser par la même occasion l’image de l’informaticien mou et chétif en diffusant un after movie en espérant que l’évènement sois reconduit par les promotions futures.
    </p>

    <h3>Les étapes</h3>
    <p class="article-paragraph">
      Dans un premier temps, il a fallu récolter les fonds nécessaires pour pouvoir proposer les diverses activités à un prix attractif.
      Pour ce faire, nous avons organisé et animé des buvettes au sein de l’école les matins, en proposant snacks, boissons chaudes et sodas, et des crêpes faîtes maison.
      Nous avons également préparé un couscous, un chili con carne et un barbecue pour 40 personnes.
    </p>
    <p class="article-paragraph">
      Une fois l’objectif atteint, nous sommes partis à la recherche de nos participants, que nous n’avons guère eu de mal à trouver.
      Après avoir disséminé des affiches et des flyers dans l’école, nous avons commencé une campagne d'emails.
    </p>
    <p class="article-paragraph">
      Nous avons clos les inscriptions en passant voir les étudiants dans leur salle de classe, et nous sommes arrêtés lorsqu’il n’y avait plus de place disponible.
      Enfin, nous avons présenté notre projet devant un jury chargé de les noter.
    </p>

    <h3>Acteurs</h3>
    <p class="article-paragraph">
      <ul>
        <li>Catherine Dorignac, suiveur de projet</li>
        <li>La base de loisirs pour l’accrobranche, le bowling, et le prestataire pour le bubble soccer, dans le Urban Soccer</li>
        <li>Les étudiants les membres de l’équipe pédagogique.</li>
      </ul>
    </p>

    <h3>Les résultats</h3>
    <p class="article-paragraph">
      En réunissant 20 participants pendant chaque activité à faible coût,
      nous avons tissé des liens entre des étudiants qui se connaissaient peu, et amélioré les relations avec les membres de l’équipe pédagogique d’IN’TECH qui ont souhaité participer.
      Evalués avec en même temps qu’une vingtaine de projets, nous nous sommes vus attribuer la 2ème place sur le podium.
    </p>

    <h3>Les lendemains du projet</h3>
    <p class="article-paragraph">
      Si le concept n’a pas été exactement repris, nous avons déjà pu constater que les étudiants sont de plus en plus impliqués dans les évènements organisés : dès le semestre suivant, un laser game, un escape game, un voyage à europa park et bien d’autres projets ont vu le jour.
    </p>

    <h3>Mes apports sur le projet, ma valeur ajoutée, les enseignements tirés</h3>
    <p class="article-paragraph">
      Ayant été chef de projet, j’ai été amené à gérer les baisses de motivation de mes camarades, et j’ai assuré un suivi particulier de l’organisation de l’ensemble des actions menées en plus de ma participation.
    </p>
    <div class="related-articles-container">
      <h3 class="related-articles-title">Voir aussi :</h3>
      <div class="articles-chips-container">
        <router-link class="article-chip" :to="{ name: 'perseverence' }">Persévérance</router-link>
        <router-link class="article-chip" :to="{ name: 'goodMood' }">Bonne humeur</router-link>
        <router-link class="article-chip" :to="{ name: 'organization'}">Organisation</router-link>
      </div>
    </div>
    <div class="articles-links-buttons">
      <router-link class="article-link-btn" :to="{ name: 'realisations' }">Retour aux réalisations</router-link>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
@import 'src/styles/article';
.image-container {
  display: flex;
  justify-content: center;
  .article-cover {
    max-width: 300px;
  }
}
</style>
