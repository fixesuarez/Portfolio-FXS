<template>
<div :class="['app-container', { 'extended': isMenuExtended }]">
  <div class="btn-menu-wrapper" @click="toggleMenu()">
    <div class="menu-container">
      <div class="line line-top" />
      <div class="line line-center" />
      <div class="line line-bottom line-short" />
    </div>
  </div>
  <div class="menu-panel-wrapper">
    <div class="menu-panel-container">
      <div class="menu-profile">
        <img src="./assets/fx.png" alt="profile-picture" class="profile-picture">
        <div class="profile-description-container">
          <h1 class="profile-name">François-Xavier</h1>
          <span class="profile-job">Développeur front-end</span>
          <span class="profile-job">Gardien de la paix avant tout</span>
        </div>
      </div>
      <div class="menu-links-container">
        <router-link
          v-for="(menu, index) in menu"
          :key="index"
          @click.native="toggleMenu()"
          tag="span"
          :to="{ name: menu.pathName }"
          class="menu-item">
          {{ menu.label }}
        </router-link>
      </div>
    </div>
  </div>
  <div id="app" :class="{ 'extended': isMenuExtended }" >
    <!-- <Toolbar/> -->
    <router-view/>
  </div>
</div>
</template>

<script>
import Toolbar from './components/core/Toolbar.vue'

import menu from './assets/menu'

export default {
  name: 'app',
  components: {
    Toolbar,
  },
  data () {
    return {
      isMenuExtended: false,
      menu
    }
  },
  mounted () {
  },
  methods: {
    toggleMenu () {
      this.isMenuExtended = !this.isMenuExtended
    }
  }
}
</script>

<style lang="scss">
@import 'src/styles/main';
@import 'src/styles/variables';

* {
  color: rgba(0, 0, 0, 0.84);
  font-family: 'Montserrat', sans-serif;
}

html {
  width: 100vw;
  overflow-x: hidden;
}
body {
  margin: 0;
  perspective: 1000px;
  transition: perspective 0.3s;
}

h3 {
  line-height: 40px;
}

.app-container {
  position: relative;
  #app {
    will-change: transform;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    background: rgba(253, 253, 253, 1);
    height: 100vh;
    width: 100vw;
    transform: translateZ(0px);
    transition: transform 0.3s ease 0.6s;
    overflow-y: inherit;
    overflow-x: hidden;
    position: relative;
  }
  $menu-size: 30px;
  .btn-menu-wrapper {
    position: fixed;
    left: 2%;
    top: 50%;
    transition: left 0.7s ease !important;
    transform: translateY(-50%);
    padding: 5px;
    width: calc(#{$menu-size} * 1.4);
    height: calc(#{$menu-size} * 1.4);
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    z-index: 5;
    .menu-container {
      height: calc(#{$menu-size} * 0.75);
      width: $menu-size;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .line {
        width: 100%;
        border-bottom: 2px solid #f0c300;
      }
      .line-short {
        width: 50%;
        transition: width 0.3s ease !important;
      }
      .line-top {
        transform-origin: left;
        transform: translate(0px, 0px) rotate(0deg);
        transition: transform 1s ease;
      }
      .line-center {
        transform: rotate(0deg);
        transition: transform 1s ease;
      }
      .line-bottom {
        transform-origin: left;
        transform: translate(0px, -0px) rotate(0deg);
        transition: transform 1s ease;
      }
    }
    &:hover {
      background-color: rgba(255, 255, 255, 0.6);
      transition: background-color 0.1s;
      .line-short {
        width: 100%;
        transition: width 0.3s ease;
      }
    }
  }
  .menu-panel-wrapper {
    height: 100vh;
    width: 80%;
    // padding: 50px;
    position: fixed;
    top: 0;
    left: -80%;
    transition: left 0.7s ease 0.3s;
    background: white;
    z-index: 2;
    $profile-picture-size: 80px;
    .menu-panel-container {
      padding: 40px 5%;
      .menu-profile {
        display: flex;
        .profile-picture {
          max-width: $profile-picture-size;
          max-height: $profile-picture-size;
          border-radius: 50%;
        }
        .profile-description-container {
          display: flex;
          flex-direction: column;
          margin: 0 calc(#{$profile-picture-size} * 0.15);
          .profile-name {
            margin: 0;
            font-size: 18px;
            font-weight: 800;
          }
          .profile-job {
            color: rgba(0 ,0, 0, 0.54);
            margin-top: 3px;
          }
        }
      }
      .menu-links-container {
        margin: calc(#{$profile-picture-size} / 2);
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        .menu-item {
          position: relative;
          margin: 15px 0;
          padding: 10px 0;
          cursor: pointer;
          &:after {
            position: absolute;
            bottom: 0px;
            height: 3px;
            display: block;
            width: 0px;
            background: #f0c300;
            content: '';
            transition: all 0.4s ease;
          }
          &:hover {
            &:after {
              width: 100%;
            }
          }
          .sub-menu-item {
            
          }
        }
      }
    }
  }
}

.extended {
  .menu-panel-wrapper {
    left: 0%;
    transition: left 0.7s ease 0.2s;
  }
  #app {
  transform : translateZ(-100px); 
  transition: transform 0.3s ease 0.8s;
  }
  .btn-menu-wrapper {
    left: calc(80% - 30px - 50px);
    transition: left 0.7s ease 0.5s !important;
    .line-top {
      transform-origin: left;
      transform: translate(5px, 0px) rotate(405deg) !important;
      transition: transform 1s ease;
    }
    .line-center {
      transform: rotate(405deg) !important;
      transition: transform 1s ease;
    }
    .line-bottom {
      transform-origin: left;
      transform: translate(5px, -0px) rotate(-405deg) !important;
      transition: transform 1s ease;
      width: 100% !important;
    }
  }
}
</style>
