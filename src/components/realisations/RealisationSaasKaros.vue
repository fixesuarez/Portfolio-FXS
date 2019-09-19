<template>
  <div class="realisation-karos article-content">
    <h2 class="article-title">SaaS Karos</h2>
    <div class="article-covers-container">
      <img src="../../assets/article-covers/karos-entreprises.svg" alt="" class="cover-karos-entreprises">
      <img src="../../assets/article-covers/karos-territoires.svg" alt="" class="cover-karos-territoires">
    </div>
    <h3>Présentation – Définition :</h3>
    <p class="article-paragraph">
      Karos est une application mettant en relation des individus ayant un itinéraire commun (en tout ou partie) entre leur domicile et leur travail.
      Karos développe deux SaaS à destination des entreprises et des territoires, leur permettant de paramétrer l’offre Karos pour leurs utilisateurs, créer des outils de communication, consulter des statistiques en temps réel.
    </p>
    <h3>Objectifs :</h3>
    <p class="article-paragraph">
      <ul>
        <li>Produire des supports de communications personnalisables</li>
        <li>Proposer des statistiques de QVT/RSE en temps réel</li>
        <li>Outils d’incitations à l’inscription et à la rétention des utilisateurs</li>
      </ul>
    </p>
    <h3>Contexte, enjeux</h3>
    <p class="article-paragraph">
      Les SaaS ont pour mission d’automatiser et de faciliter la vie de nos Projects Managers, nos équipes de communications et nos designers en automatisant la production de visuels et la saisie des différents paramètres.
      Cela nous permet de multiplier les contrats avec les entreprises et les territoires partenaires, le nombre d’utilisateurs de l’application, ce qui implique une fluidification du trafic routier, un gain de pouvoir d’achat, et la diminution d’émission de différents agents polluant.
    </p>
    <h3>Étapes</h3>
    <p class="article-paragraph">
      Le développement des différentes plateformes était déjà avancé lors de mon arrivée, mais les plateformes sont et seront toujours en constante évolution.
      Je suis en binôme sur les développements frontend des deux projets (SaaS Karos Entreprises et Karos Territoires).
      Le périmètre d’intervention est large. Comme sur tout projet d’ampleur qui se respecte, il convient de revenir autant que faire se peut sur le code existant pour le rendre plus modulable, lisible, et minimaliste.
    </p>
    <p class="article-paragraph">
      Cela étant, il est aussi primordial d’ajouter du contenu et d’embellir les interfaces.
      C’est dans cette optique que je suis intervenu sur le module reporting afin de faciliter la lecture des statistiques, et rendre leur affichage plus modulable et user-friendly.
      Un travail conséquent a aussi été fourni pour le développement de fonctionnalités permettant d’automatiser certaines tâches rébarbatives et fastidieuses de suivi clients que devaient auparavant faire manuellement les Project Managers, dans des phases de planification et de définition des besoins.
    </p>
    <p class="article-paragraph">
      Un besoin de design a également fait surface, ce qui m'a donné l’opportunité de réaliser des maquettes dans le respect de la charte graphique et de cohérence des interfaces déjà existantes.
      Enfin, en marge de ces tâches quotidiennes, j’ai commencé à écrire des tests unitaires qui nous permettront à long terme d’éviter les régressions et l’apparition de bugs divers.
    </p>
    <h3>Acteurs</h3>
    <p class="article-paragraph">
      <ul>
        <li>2 développeurs front</li>
        <li>1 développeur backend</li>
        <li>1 UX/UI designer,</li>
        <li>2 project managers</li>
        <li>Equipe de communication B2B</li>
      </ul>
    </p>

    <h3>Les résultats</h3>
    <p class="article-paragraph">
      Nos Project Managers se voient progressivement déchargés de tâches qui sont au fur et à mesure automatisées.
      Certains développements ont également été réalisés pour répondre à des appels d’offres, qui ont pour certains étés gagnés.
    </p>

    <h3>Les lendemains du projet</h3>
    <p class="article-paragraph">
      Les développements seront sans fin, aussi bien pour embellir et purifier la base de code d’ores et déjà existante, que pour ajouter des nouvelles fonctionnalités qui nous permettront d’industrialiser la signature des contrats, et ainsi contribuer à la pérennité de l’entreprise.
    </p>
    <h3>Mes apports sur le projet, ma valeur ajoutée, les enseignements tirés</h3>
    <p class="article-paragraph">
      La prise en main des deux SaaS aura été plutôt longue et fastidieuse, mais cela me permet aujourd’hui d’être autonome sur n’importe quel développement.
      J’apprends quotidiennement, que ce soit de mes erreurs, de code reviews ou de lecture sur les bonnes pratiques à avoir.
    </p>
    <div class="related-articles-container">
      <h3 class="related-articles-title">Voir aussi :</h3>
      <div class="articles-chips-container">
        <router-link class="article-chip" :to="{ name: 'goodMood'}">Bonne humeur</router-link>
        <router-link class="article-chip" :to="{ name: 'perseverence'}">Persévérance</router-link>
        <router-link class="article-chip" :to="{ name: 'openMinded'}">Ouverture aux autres</router-link>
        <router-link class="article-chip" :to="{ name: 'vuejs'}">Vuejs</router-link>
        <router-link class="article-chip" :to="{ name: 'htmlCss'}">HTML / CSS</router-link>
        <router-link class="article-chip" :to="{ name: 'git'}">Git</router-link>
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
.article-covers-container {
  width: 100%;
  height: 90vh;
  position: relative;
  .cover-karos-entreprises, .cover-karos-territoires {
    width: 60%;
    object-fit: contain;
    position: absolute;
  }
  .cover-karos-entreprises {
    top: 15%;
    left: 0%;
  }
  .cover-karos-territoires {
    bottom: 35%;
    right: 0%;
  }
}
</style>
