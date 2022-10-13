<template>
  <div class="footer__container">
      <div>
          <a>Github</a>
          <a>LinkedIn</a>
          <a>Portfolio</a>
      </div>
    <h4>Copyright Zak Schenck 2022</h4>
  </div>
</template>
<script>
export default {
  name: "Footer",
};
</script>
<style lang="scss" scoped>
.footer__container {
  background-color: rgb(44, 44, 44);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px;
  color: white;
  div {
      display: flex;
      flex-direction: row;
      margin: 20px;
      gap: 30px;
      a {
          text-decoration: underline;
      }
  }
}
</style>