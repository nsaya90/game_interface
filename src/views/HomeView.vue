<template>
  <div class="home">
    <h1>Bienvenue</h1>
    <div class="container-md">
      <h2>Top 4 des meilleurs jeux</h2>
    </div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-4">
          <GameCard></GameCard>
        </div>
        <div class="col-md-4">
          <GameCard></GameCard>
        </div>

        <div class="col-md-4">
          <GameCard></GameCard>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import GameCard from "@/components/GameCard.vue";
export default {
  name: "HomeView",
  components: {
    GameCard,
  },
};
</script>

<style scoped></style>
