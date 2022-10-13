<template>
  <div class="hero__hero-container">
    <h1>New Samsung Galaxy</h1>
    <h2>S22 Ultra.</h2>
    <NuxtLink to="/smartphones">
      <button>Shop Smartphones</button>
    </NuxtLink>
    <div style="overflow: hidden">
      <img src="../static/samsung-transparent-bg.png" />
    </div>
  </div>
</template>
<script>
export default {
  name: "Hero",
};
</script>
<style lang="scss" scoped>
.hero__hero-container {
  display: flex;
  flex-grow: 1;
  background-color: black;
  color: white;
  align-items: center;
  flex-direction: column;
  gap: 15px;
  height: 93vh;
  margin-top: 60px;
  h1 {
    font-size: 40px;
    margin-top: 50px;
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif;
    @media (max-width: 445px) {
      font-size: 34px;
    }
    @media (max-width: 370px) {
      font-size: 25px;
    }
  }
  h2 {
    font-size: 30px;
    font-weight: 400;
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif;
  }
  button {
    background-color: rgb(47, 47, 248);
    color: white;
    font-size: 16px;
    font-weight: bold;
    padding: 10px;
    border-radius: 8px;
    transition: 0.6s;
    &:hover {
      cursor: pointer;
      background-color: rgb(79, 79, 251);
      transition: 0.6s;
    }
  }
  img {
    height: 550px;
    width: auto;
    @media (max-width: 700px) {
      width: 110%;
      height: auto;
    }
  }
}
</style>