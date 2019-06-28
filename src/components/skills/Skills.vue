<template>
  <div class="skills-container">
    <div class="skills-index-landing">
      <span class="landing-text">Compétences</span>
      <div class="scroll-icn-container">
        <img src="../../assets/chevron-down.svg" alt="" class="scroll-icn">
      </div>
    </div>
    <div class="skills-categories-container">
      <div class="technical-skills-container skills-category-container">
        <h2 class="category-title">Compétencences Techniques</h2>
        <div class="cards-container">
          <router-link v-for="(technicalSkill, index) in technicalSkills"
            :key="index"
            :to="{ name: technicalSkill.routeName }"
            tag="div"
            class="card">
            <div class="image-card-container">
              <img :class="['image', `logo-${technicalSkill.title}`]" :src="require(`@/assets/${technicalSkill.imageName}`)">
            </div>
            <span class="card-title">{{ technicalSkill.title }}</span>
          </router-link>
        </div>
      </div>
      <div class="separator"></div>
      <div class="soft-skills-container skills-category-container">
        <h2 class="category-title">Compétencences Humaines</h2>
        <div class="cards-container">
          <router-link v-for="(softSkill, index) in softSkills"
            :key="index"
            :to="{ name: softSkill.routeName }"
            tag="div"
            class="card">
            <div class="image-card-container soft-skill-image-container">
              <img :class="['image']" :src="require(`@/assets/${softSkill.imageName}`)" alt="">
            </div>
            <span class="card-title">{{ softSkill.title }}</span>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import skills from '@/assets/skills'

export default {
  data () {
    return {
      softSkills: skills.softSkills,
      technicalSkills: skills.technicalSkills
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'src/styles/variables';

.skills-index-landing {
  height: 100vh;
  width: 100vw;
  background: #000;
  display: flex;
  align-items: center;
  justify-content: center;
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
    animation: floating 0.95s ease alternate infinite;
    .scroll-icn {
      width: 30px;
    }
  }
}
.skills-categories-container {
  padding: 25px 0;
  display: flex;
  background: $background-white;
  .skills-category-container {
    flex: 1;
    .category-title {
      text-align: center;
    }
  }
  .separator {
    border-right: 1px solid #b6b6b6;

  }
}
.logo-C\# {
  width: 100% !important;
  height: 100% !important;
}
.soft-skill-image-container {
  background: #5c5c5c;
  .image {
    width: 60% !important;
    height: 60% !important;
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
