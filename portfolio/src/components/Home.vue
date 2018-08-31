<template>
  <div>
    <md-toolbar class="md-medium">
      <img src="./../assets/profile-picture.jpg" alt="profile-picture" id="profile-picture">
      <h3 class="md-title">François-Xavier Suarez</h3>
      <md-button>Accueil</md-button>
      <md-button>Réalisations</md-button>
      <md-button>Compétences</md-button>
      <md-button>Expériences</md-button>
    </md-toolbar>
    <p>Home Component</p>
  </div>
</template>

<script>
  export default {

  }
</script>

<style>
  #profile-picture {
    width: 5%;
    height: 5%;
    border-radius: 50%;
  }
  .md-title {
    flex: 1;
  }
</style>
