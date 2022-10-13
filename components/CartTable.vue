<template>
  <div>
    <div class="cart-table__table-container">
      <table v-if="cartArray.length > 0">
        <tr>
          <th>Logo</th>
          <th>Brand</th>
          <th>Product</th>
          <th>Price</th>
        </tr>
        <tr v-for="(product, index) in cartArray" :key="index">
          <td><img :src="product.images[0]" /></td>
          <td>
            {{ product.brand }}
          </td>
          <td>{{ product.title }}</td>
          <td class="cart-table__price">
            ${{ product.price
            }}<span><h1 @click="removeItem(index)">X</h1></span>
          </td>
        </tr>
        <div>
          <button>Checkout ${{ totalCost }}</button>
        </div>
      </table>
      <div class="cart-table__empty" v-else>
        <h1>Your Cart is Empty :(</h1>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "CartTable",
  computed: {
    ...mapGetters({
      cartArray: "getCartArray",
      cartNumber: "getCartNumber",
    }),
  },

  data() {
    return {
      totalCost: 0,
    };
  },

  methods: {
    removeItem(index) {
      let cost = 0;
      this.$store.commit("setCardNumber", (this.cartNumber -= 1));
      this.$store.commit("removeCartItem", index);
      for (let i = 0; i < this.cartArray.length; i++) {
        this.totalCost = cost += this.cartArray[i].price;
      }
      if (this.cartArray.length === 0) {
        this.totalCost = 0;
      }
    },
  },

  mounted() {
    for (let i = 0; i < this.cartArray.length; i++) {
      this.totalCost += this.cartArray[i].price;
    }
  },
};
</script>
<style lang="scss" scoped>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 800px;
  margin: 60px auto;
  tr td {
    border-right: 1px solid rgb(228, 228, 228);
    height: 70px;
  }
  tr td img {
    width: auto;
    height: 100%;
  }
}

td,
th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
  td {
    border-right: 1px solid white;
  }

  tr:nth-child(odd) {
    td {
      border-right: 1px solid;
    }
  }
}
button {
  background-color: rgb(47, 47, 248);
  color: white;
  font-size: 16px;
  font-weight: bold;
  padding: 10px;
  border-radius: 8px;
  transition: 0.6s;
  margin-top: 20px;
  &:hover {
    cursor: pointer;
    background-color: rgb(79, 79, 251);
    transition: 0.6s;
  }
}

.cart-table__price {
  position: relative;
  span {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: -40px;
    color: white;
    background-color: rgb(209, 86, 86);
    padding: 6px;
    font-size: 15px;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    &:hover {
      cursor: pointer;
    }
  }
}

.cart-table__empty {
  margin: 40px;
  h1 {
    text-align: center;
  }
}
</style>