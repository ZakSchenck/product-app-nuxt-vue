<template>
  <div>
    <Header />
    <div style="margin-top: 100px">
      <div class="product__container">
        <NuxtLink to="/">
          <button id="product__back-button">Back To Home</button>
        </NuxtLink>
        <p id="product__directory">
          Products&nbsp;&nbsp; > &nbsp;&nbsp;<span
            >New
            {{
              this.$route.params.product.charAt(0).toUpperCase() +
              this.$route.params.product.slice(1)
            }}</span
          >
        </p>
        <h1>
          Shop
          {{
            this.$route.params.product.charAt(0).toUpperCase() +
            this.$route.params.product.slice(1)
          }}
        </h1>
        <hr />
        <p id="product__results">{{ data.products.length }} results</p>
        <hr />
        <div class="product__item-container">
          <div
            class="product__item"
            v-for="(product, index) in data.products"
            :key="index"
          >
            <div class="product__item-banner">
              Item starts at ${{ product.price }}
            </div>
            <img :src="product.images[0]" :alt="product.title" />
            <h3>
              <span>{{ product.brand }}</span> {{ product.title }}
            </h3>
            <p>Base price ${{ product.price }}</p>
            <button @click="addToCart(product)">Add to Cart</button>
            <p v-if="showAddedToCart">Item Added! &#10003;</p>
          </div>
        </div>
      </div>
    </div>
    <Footer style="margin-top: 40px;" />
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "products",
  data() {
    return {
      showAddedToCart: false,
      index: null,
    };
  },
  async asyncData({ params }) {
    const res = await fetch(
      `https://dummyjson.com/products/category/${params.product}`
    );
    const data = await res.json();
    return { data };
  },
  computed: {
    ...mapGetters({
      productData: "getProductData",
      cartNumber: "getCartNumber",
      cartArray: "getCartArray"
    }),
  },
  methods: {
    addToCart(product) {
      this.$store.commit("setCartNumber", this.cartNumber += 1);
      this.$store.commit("setCartArray", product);
    },
  },
};
</script>
<style lang="scss" scoped>
.product__container {
  margin-left: 20px;
  margin-right: 20px;

  hr {
    margin: 20px 0;
    border: none;
    background-color: lightgray;
    height: 1px;
  }
  #product__results {
    margin: 40px 0;
    font-size: 18px;
  }
  .product__item-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    width: fit-content;
    margin: -21px auto;
    @media (max-width: 975px) {
      grid-template-columns: 1fr 1fr;
    }
    @media (max-width: 657px) {
      grid-template-columns: 1fr;
    }
    div {
      width: 315px;
      border: 1px solid lightgray;
      overflow-x: hidden;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      height: 525px;
      padding: 10px;
      margin-right: -1px;
      gap: 10px;
      position: relative;
      @media (max-width: 357px) {
        width: 100%;
      }
      p {
        font-size: 13px;
      }
      img {
        width: auto;
        height: 300px;
        margin-top: 70px;
      }
      .product__item-banner {
        background-color: black;
        color: white;
        display: flex;
        align-items: center;
        height: 50px;
        position: absolute;
        top: 15px;
        left: 0;
        font-weight: bold;
      }
      button {
        position: absolute;
        bottom: 15px;
        text-decoration: underline;
        font-weight: 800;
      }
    }
  }
}
#product__directory {
  margin: 20px 0;
  span {
    color: gray;
  }
}
#product__back-button {
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
</style>