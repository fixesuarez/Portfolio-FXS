<template>
  <div class="toolbar-container">
    <md-toolbar class="md-medium">
      <span id="profile-picture-container">
        <img src="./../../assets/profile-picture.jpg" alt="profile-picture" id="profile-picture">
      </span>
      <h3 class="md-title">François-Xavier Suarez</h3>
      <span style="flex: 1"></span>
      <md-button>Accueil</md-button>
      <md-button>Réalisations</md-button>
      <md-button>Compétences</md-button>
      <md-button>Expériences</md-button>
    </md-toolbar>
  </div>
</template>

<script>
  export default { }
</script>

<style lang="scss">
#profile-picture-container{
  width: 5%;
  height: 5%;
  padding: 15px;
}
#profile-picture {
  border-radius: 50%;
}
</style>
