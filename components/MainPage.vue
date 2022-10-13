<template>
  <div>
    <h1>Shop Our Categories</h1>
    <div class="main-page__container">
      <div
        class="main-page__loop"
        v-for="(item, index) in categoryImg"
        :key="index"
      >
        <img :src="item.url" :alt="item.category" />
        <h3>{{ item.category }}</h3>
        <NuxtLink :to="`/${item.category.toLowerCase()}`"
          ><a>Shop Now</a></NuxtLink
        >
        <p>{{ item.from }}</p>
        <div v-if="item.offerBanner" class="main-page__offer-banner">
          <p>{{ item.offerBanner }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "MainPage",
  computed: {
    ...mapGetters({
      productData: "getProductData",
    }),
  },

  data() {
    return {
      categoryImg: [
        {
          category: "Smartphones",
          url: "https://dummyjson.com/image/i/products/2/1.jpg",
          from: "from $399.99 with returns",
          offerBanner: "Sale ends Dec 02",
        },
        {
          category: "Laptops",
          url: "https://dummyjson.com/image/i/products/9/2.png",
          from: "from $799.99 with returns",
          offerBanner: "Sale ends Jan 13",
        },
        {
          category: "Fragrances",
          url: "https://dummyjson.com/image/i/products/11/thumbnail.jpg",
          from: "from $24.99 with returns",
          offerBanner: "New Arrival",
        },
        {
          category: "Skincare",
          url: "https://dummyjson.com/image/i/products/16/1.png",
          from: "from $9.99 with returns",
        },
        {
          category: "Groceries",
          url: "https://dummyjson.com/image/i/products/21/2.jpg",
          from: "from $4.99 no returns",
        },
        {
          category: "Home-Decoration",
          url: "https://dummyjson.com/image/i/products/29/1.jpg",
          from: "from $89.99 with returns",
          offerBanner: "New Arrival",
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.main-page__container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  @media (max-width: 1300px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 880px) {
    grid-template-columns: 1fr;
  }
  .main-page__loop {
    margin: 20px auto;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 10px;
    width: 420px;
    background-color: rgb(238, 237, 237);
    height: 350px;
    padding: 15px;
    justify-content: center;
    border-radius: 15px;
    position: relative;
    @media (max-width: 458px) {
      width: 90%;
    }
    .main-page__offer-banner {
      position: absolute;
      top: 20px;
      left: 20px;
      background-color: #1d7be5;
      color: white;
      border-radius: 8px;
      padding: 5px 7px;
      p {
        font-weight: 900;
        font-size: 12px;
      }
    }
    a {
      font-weight: 600;
      color: #1d7be5;
      text-decoration: underline;
    }
  }
}
h1 {
  margin: 40px auto;
  position: relative;
  display: block;
  width: fit-content;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  &::before {
    content: "";
    bottom: -9px;
    left: 0;
    height: 8px;
    background-color: black;
    width: 100%;
    position: absolute;
  }
}
img {
  width: 220px;
  height: 200px;
}
</style>