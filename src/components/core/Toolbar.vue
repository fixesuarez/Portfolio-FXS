<template>
  <div class="toolbar-container">
    <router-link tag="h1" to="/" class="menu-name toolbar-item-name">François-Xavier Suarez</router-link>
    <span style="flex: 1"></span>
    <router-link tag="span" to="/realisations" class="toolbar-item">Réalisations</router-link>
    <router-link class="toolbar-item" tag="span" :to="{ name: 'skills' }">Compétences</router-link>
    <span class="toolbar-item">Expériences</span>
  </div>
</template>

<script>
  export default { }
</script>

<style lang="scss">
@import 'src/styles/variables';

.toolbar-container {
  width: 100%;
  position: fixed;
  padding: 20px 10px;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background: rgba(253, 253, 253, 0.7);
  z-index: 50;
  .menu-name {
    position: relative;
    font-weight: 500;
    font-size: 24px;
    justify-self: flex-start;
    margin: 0;
    margin: 0 20px;
    cursor: pointer;
    &:after {
      position: absolute;
      bottom: -7px;
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
  }
  .toolbar-item {
    margin: 0 10px;
    cursor: pointer;
    position: relative;
    &:after {
      position: absolute;
      bottom: -2px;
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
  }
}
</style>
