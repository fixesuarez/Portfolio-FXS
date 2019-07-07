<template>
  <div class="realisations-index-container">
    <div class="realisations-index-landing">
      <h2 class="landing-text">Réalisations</h2>
      <div class="scroll-icn-container" @click="scrollToContent()">
        <img src="../../assets/chevron-down.svg" alt="Continuer la lecture" class="scroll-icn">
      </div>
    </div>
    <div class="realisation-cards-container">
      <router-link :to="{ name: 'saasKaros' }" tag="div" class="realisation-card">
        <div class="image-card-container card-karos-saas">
          <img class="realisation-image" src="../../assets/card-images/karos-gradient.svg" alt="">
        </div>
        <span class="card-title">SaaS Karos</span>
      </router-link>
      <router-link :to="{ name: 'omega' }" tag="div" class="realisation-card">
        <div class="image-card-container card-omega">
          <img class="realisation-image" src="../../assets/card-images/omega.png" alt="">
        </div>
        <span class="card-title">Oméga</span>
      </router-link>
      <router-link :to="{ name: 'apm' }" tag="div" class="realisation-card">
        <div class="image-card-container card-astek">
          <img class="realisation-image" src="../../assets/card-images/astek.png" alt="">
        </div>
        <span class="card-title">Astek Project Manager</span>
      </router-link>
      <router-link :to="{ name: 'afk' }" tag="div" class="realisation-card">
        <div class="image-card-container card-afk">
          <img class="realisation-image" src="../../assets/card-images/afk.png" alt="">
        </div>
        <span class="card-title">Away From Keyboard</span>
      </router-link>
      <router-link :to="{ name: 'nuit-info' }" tag="div" class="realisation-card">
        <div class="image-card-container card-nuit-info">
          <img class="realisation-image" src="../../assets/card-images/nuit-info.svg" alt="">
        </div>
        <span class="card-title">Nuit de l'info 2018</span>
      </router-link>
    </div>
    <div class="articles-links-buttons">
      <router-link class="article-link-btn" :to="{ name: 'skills' }">Voir mes compétences</router-link>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    scrollToContent () {
      document.querySelector('.realisation-cards-container').scrollIntoView({
        behavior: 'smooth'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'src/styles/variables';

.realisations-index-landing {
  height: 100vh;
  width: 100vw;
  background: black;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  .scroll-icn-container {
    position: absolute;
    left: 50%;
    bottom: 5%;
    padding: 10px 20px;
    background: rgba(255, 255, 255, 0.9);
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    animation: floating 0.95s ease alternate infinite;
    .scroll-icn {
      width: 30px;
    }
  }
}
.realisation-cards-container {
  background: $background-white;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 50px;
  .realisation-card {
    margin: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: white;
    cursor: pointer;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
    border: 1px #e6e6e6;
    .image-card-container {
      margin: 10px;
      height: 300px;
      width: 300px;
      border: 1px solid #e6e6e6;
      display: flex;
      align-items: center;
      justify-content: center;
      .realisation-image {
        width: 80%;
        height: 80%;
        object-fit: contain;
      }
    }
    &:hover {
      opacity: 0.8;
      transition: opacity 0.4s ease;
    }
    .card-title {
      margin: 10px 0 20px 0;
      font-weight: 700;
      color: #5c5c5c;
    }
  }
  .card-omega, .card-nuit-info {
    background: #000;
  }
  .card-astek {
    background: #00964e;
  }
  .card-afk {
    background: #e6e6e6;
  }
}

.articles-links-buttons {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 70px 0;
  background: $background-white;
  .article-link-btn {
    background: #234099;
    color: white;
    text-decoration: none;
    padding: 20px 40px;
    border-radius: 30px;
    &:hover {
      opacity: 0.97;
      transition: all 0.3s ease;
      box-shadow: 0 2px 4px 2px rgba(0, 0, 0, 0.4);
    }
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
</style>
