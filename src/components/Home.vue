<template>
  <div id="home-container">
    <div class="background-image-container">
      <img src="../assets/home_background.png" alt="" class="home-page-background">
      <p class="proverb-first-line">Si haut que l'on soit placé</p>
      <p class="proverb-second-line">On n'est jamais assis que sur son cul</p>
      <div class="scroll-icn-container">
        <img src="../assets/chevron-down-white.svg" alt="" class="scroll-icn">
      </div>
    </div>
    <div class="about-me-article">
      <div class="article-content">
        <div class="about-me-header">
          <img src="../assets/profile-picture.jpg" alt="profile-picture" class="profile-picture">
          <div class="profile-description-container">
            <span class="profile-name">François-Xavier</span>
            <span class="profile-job">Développeur front-end</span>
          </div>
        </div>
        <h3>Une vision d'ensemble</h3>
        <p class="article-paragraph">
          Je fais partie d'une fratrie de 8 enfants. Indéniablement, cela a influé sur mon sens du partage, mon éducation, ma mentalité et mon épanouïssement personnel.
          Etant un des plus jeune, je me suis fait ma place tout en restant calme et discret, mais aussi plaisantin et souriant.
          Ce sont des valeurs que je retrouve à travers différentes activités :
          <ul>
            <li>L'escalade, que je pratique maintenant depuis plusieurs années, est un sport qui me permet de me fixer des objectifs qui me sont propres,
              n'obligeant que moi à me surpasser sans me mettre en compétition avec d'autres et sans me comparer à qui que ce soit.
              Dans l'ensemble, les personnes pratiquant ce sport ont un profil bienveillant, solidaire, souhaitant la réussite de l'autre.
              Ainsi, je fréquente aujourd'hui plusieurs fois par semaine des passionnés avec qui j'ai la chance de partager de bon moments.
            </li>
            <li>
              Dévenu bénévole chez les <i>Scouts et Guides de France</i> depuis l'année 2013, j'ai découvert un univers où l'entraide et le partage sont omniprésents.
              Depuis que j'ai commencé cette activité, j'ai gagné de la confiance en moi. D'abord part la prise de responsabilité qui est de veiller à la sécurité physique et mentale des enfants qui nous sont confiés, mais aussi par les temps d'animations dont je suis rapidement devenu adepte.
              En y investissant plusieurs centaines d'heures par an, j'ai pu monter et vivre à l'aide d'autres bénévoles des projets incroyables. Le plus illustre étant d'avoir emmené 35 jeunes à un rassemblement de plus de 5000 personnes en Espagne.
            </li>
            <li>
              A l'heure ou je rédige cet article, les différentes équipes avec lesquelles je travaille, aussi bien dans ma vie étudiante que professionnelle, me mettent dans les meilleurs dispositions pour que je puisse travailler dans les meilleurs conditions, en alliant sérieux, efficacité et bonne humeur.
              Je peux alors être pleinement moi-même au milieu de ces collègues et camarades, parfois devenus amis depuis lors. Souvent engagés et portant des valeurs fortes, je peux sans cesse recueillir de nouvelles opinions, et les confronter avec les miennes, même si de par mon caractère, je n'expose pas immédiatement mes idées divergeantes.
            </li>
          </ul>
        </p>
        <span class="article-separator">*</span>
        <h3>Projet personnel et professionnel</h3>
          <p class="article-paragraph">
            J'ai prévu pour le court et moyen terme de persévérer sur un métier technique plus que sur de la gestion de projet.
            Les principales raisons étant l'aspect ludique du métier, ainsi les innombrables domaines d'expertises qui pourraient retirer à tout homme le rêve d'être omniscient, me permettant ainsi de ne pas tomber dans une routine et une passivité cérébrale qui me seraient fatales.
            Sans pour autant avoir de projet professionnel bien défini sur le long terme, des idées me trottent dans la tête, telles qu'une aventure entrepreneuriale, tenter ma chance en freelance, essayer la gestion de projet, ou même pourquoi pas,
            changer complètement d'activité si j'ai un jour une révélation.
          </p>
          <p class="article-paragraph">
            J'ai eu l'opportunité malgré mon jeune âge de travailler dans de très différentes structures, aussi bien en ce qui concerne le secteur d'activité que la taille et la culture d'entreprise :
            <ul>
              <li>Groupe BPCE (Secteur bancaire, ~16 000 collaborateurs)</li>
              <li>Axones (ESN, ~100 collaborateurs)</li>
              <li>Groupe Astek (ESN, ~3000 collaborateurs)</li>
              <li>Karos (Startup, équipe de 30 personnes)</li>
            </ul>
            J'en ai déduit que c'est au sein d'organisations de taille restreinte que je me sens le plus à l'aise. D'autre part, je me suis rendu compte que je veux donner un sens à mon travail, non pas pour ma carrière, mais pour travailler pour une cause qui me semble juste, un idéal.
            Je ne serai donc pas surpris que je continue d'évoluer dans des petites entreprises, voire des associations qui souhaitent avoir un impact environnemental ou social, que ce soit de manière directe ou non.
          </p>
      </div>
    </div>
    <div class="timeline-wrapper">
      <div class="experience-item-container">
        <div class="timeline-stroke" />
        <div class="experience-image-container">
          <img src="../assets/fx.png" alt="" class="experience-image">
        </div>
      </div>
      <div class="experience-item-container">
        <div class="timeline-stroke" />
        <div class="experience-image-container">
          <img src="../assets/fx.png" alt="" class="experience-image">
        </div>
      </div>
      <div class="experience-item-container">
        <div class="timeline-stroke" />
        <div class="experience-image-container">
          <img src="../assets/fx.png" alt="" class="experience-image">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="scss">
@import 'src/styles/variables';
@import 'src/styles/article';

$profile-picture-size: 90px;
#home-container {
  overflow: auto;
  .background-image-container {
    height: calc(100vh);
    width: 100%;
    position: relative;
    $name-offset-top: 10%;
    $name-offset-left: 10%;
      font-size: 32px;
      font-weight: 600;
    .proverb-first-line {
      position: absolute;
      top: calc(#{$name-offset-top} + 27%);
      left: calc(#{$name-offset-left} + 2%);
    }
    .proverb-second-line {
      position: absolute;
      top: calc(#{$name-offset-top} + 47%);
      left: calc(#{$name-offset-left} + 20%);
    }
  }
  .home-page-background {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
  .about-me-article {
    padding: 50px 0;
    .about-me-header {
      display: flex;
      .profile-picture {
        max-width: $profile-picture-size;
        max-height: $profile-picture-size;
        border-radius: 50%;
      }
      .profile-description-container {
        display: flex;
        flex-direction: column;
        margin: calc(#{$profile-picture-size} * 0.15);
        .profile-name {
          font-weight: 800;
        }
        .profile-job {
          color: rgba(0 ,0, 0, 0.54);
          margin-top: 3px;
        }
      }
    }
    .article-separator {
      display: block;
      margin: 60px 0 40px;
      text-align: center;
      font-size: 40px;
    }
  }
}

.scroll-icn-container {
  position: absolute;
  left: 50%;
  bottom: 5%;
  padding: 10px 20px;
  background: rgba(0, 0, 0, 1);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: floating 0.95s ease alternate infinite;
  .scroll-icn {
    width: 30px;
  }
}
@keyframes floating {
  from {
    transform: translate(-50%, 0px);
  }
  to {
    transform: translate(-50%, -15px);
  }
}

// Timeline
.timeline-wrapper {
  margin: 0 10% 50px 10%;
  overflow-x: auto;
  overflow-y: hidden;
  display: flex;
  align-items: center;
  .experience-item-container {
    display: flex;
    align-items: center;
    .timeline-stroke {
      height: 2px;
      width: 100px;
      background: $main-color;
    }
    .experience-image-container {
      max-height: 100px;
      height: 100px;
      width: 100px;
      border: 2px solid $main-color;
      border-radius: 100%;
      .experience-image {
        height: 100%;
        width: 100%;
      }
    }
  }
}
</style>
