<template>
  <div>
    <div class="header__header-container">
      <div class="header-hamburger__container" @click="hamburgerHandler">
        <div
          :class="`header-hamburger_bar ${isMenuOpen && 'menuOpened'}`"
        ></div>
        <div
          :class="`header-hamburger_bar ${isMenuOpen && 'menuOpened'}`"
        ></div>
        <div
          :class="`header-hamburger_bar ${isMenuOpen && 'menuOpened'}`"
        ></div>
      </div>
      <h1>Z</h1>
      <div class="header_nav-container" ref="navMenu">
        <div v-for="(category, index) in categories" :key="index">
          <NuxtLink :to="`/${category.toLowerCase()}`">
            <button @click="setBrand(category)">
              {{ category }}
            </button>
          </NuxtLink>
        </div>
      </div>
      <div class="header__cart-position">
        <NuxtLink to="/cart">
          <div class="header__cart-container">
            <div>
              <h5>{{ cartArray.length }}</h5>
            </div>
            <button id="header__checkout-btn">Cart</button>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import { categories } from "../static/categories.js";
export default {
  name: "Header",
  computed: {
    ...mapGetters({
      productData: "getProductData",
      cartArray: "getCartArray",
    }),
  },
  data() {
    return {
      categories: categories,
      isMenuOpen: false,
    };
  },
  methods: {
    hamburgerHandler() {
      this.isMenuOpen = !this.isMenuOpen;
      if (this.isMenuOpen) {
        this.$refs.navMenu.style.transition = ".5s";
        this.$refs.navMenu.style.height = "100%";
      } else {
        this.$refs.navMenu.style.height = "0";
      }
    },
  },

  mounted() {
    this.$store.dispatch("setProductData");
  },
};
</script>
<style lang="scss">
body {
  font-family: sans-serif;
}
.header__header-container {
  background-color: white;
  color: black;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  position: fixed;
  width: 100%;
  top: 0;
  box-shadow: 3px 3px 10px gray;
  .header_nav-container {
    display: flex;
    flex-direction: row;
    z-index: 2;
    @media (max-width: 923px) {
      position: absolute;
      flex-direction: column;
      top: 60px;
      background-color: black;
      right: 0;
      margin: 0;
      gap: 20px;
      height: 0;
      width: 100%;
      overflow: hidden;
      position: fixed;
      padding-left: 3%;
    }
  }
  h1 {
    border: 2px solid black;
    border-radius: 50%;
    padding: 5px;
    width: 40px;
    display: flex;
    justify-content: center;
    margin-right: 20px;
    font-size: 20px;
  }
  div {
    margin: 0 18px;
  }
  a {
    font-size: 14px;
    position: relative;
    color: black;
    text-decoration: none;
    font-weight: 800;
    &::after {
      content: "";
      position: absolute;
      top: -6px;
      right: 0;
      width: 0;
      height: 2px;
      background-color: black;
      transition: 0.4s;
    }
    &:hover::after {
      width: 100%;
      transition: 0.4s;
    }
    &::before {
      content: "";
      position: absolute;
      bottom: -6px;
      left: 0;
      width: 0;
      height: 2px;
      background-color: black;
      transition: 0.4s;
    }
    &:hover::before {
      width: 100%;
      transition: 0.4s;
    }
    &:hover {
      cursor: pointer;
    }
    @media (max-width: 923px) {
      font-size: 20px;
      top: 30px;
      display: block;
      color: white;
      &:hover {
        background-color: rgb(98, 98, 98);
      }
      &::before {
        content: "";
        position: absolute;
        bottom: -6px;
        right: 0;
        width: 100%;
        height: 2px;
        background-color: rgb(112, 112, 112);
        transition: 0.4s;
      }
      &:hover::after {
        content: "";
        width: 0;
      }
    }
  }
  .header-hamburger__container {
    width: 40px;
    height: 21px;
    position: absolute;
    top: 18px;
    left: -13px;
    justify-content: space-around;
    flex-direction: column;
    display: none;
    z-index: 3;
    overflow: hidden;
    &:hover {
      cursor: pointer;
    }
    @media (max-width: 923px) {
      display: flex;
    }
    div {
      height: 2px;
      background-color: black;
      width: 100%;
      z-index: 2;
      margin-right: 20px;
      transition: 0.4s;
      opacity: 1;
    }
  }
  .header-hamburger_bar.menuOpened:first-child {
    transform: rotate(45deg);
    position: absolute;
    top: 80%;
    transition: 0.4s;
  }
  .header-hamburger_bar.menuOpened:nth-child(2) {
    opacity: 0;
  }
  .header-hamburger_bar.menuOpened:last-child {
    transform: rotate(-45deg);
    position: absolute;
    bottom: 70%;
    transition: 0.4s;
  }
  #header__checkout-btn {
    background-color: black;
    font-weight: 800;
    font-size: 18px;
    color: white;
    padding: 8px 15px;
    border-radius: 50px;
    right: 10px;
    transition: 0.4s;
  }
}
.header__cart-container {
  position: relative;
  div {
    background-color: rgb(214, 54, 54);
    position: absolute;
    width: 20px;
    height: 20px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 7px;
    right: -22px;
    top: -4px;
  }
}

.header__cart-position {
  position: absolute;
  top: 10px;
  right: 0;
  @media (max-width: 923px) {
    top: -18px;
  }
}
</style>