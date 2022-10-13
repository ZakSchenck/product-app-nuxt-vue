<template >
  <div class="cart-header__container">
    <h1>Cart</h1>
    <NuxtLink to="/">
      <button>Back To Home</button>
    </NuxtLink>
  </div>
</template>
<script>
import { mapGetters } from "vuex"
export default {
    name: "CartHeader",
};
</script>
<style lang="scss" scoped>
.cart-header__container {
  height: 90px;
  background-color: #f5f5f5;
  padding: 0 10%;
  margin-top: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
}
</style>    