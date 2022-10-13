export const state = () => ({
  productData: "",
  cartNumber: 0,
  cartArray: [],
});

export const getters = {
  getProductData(state) {
    return state.productData;
  },
  getCartNumber(state) {
      return state.cartNumber;
  },
  getCartArray(state) {
      return state.cartArray;
  },
};

export const mutations = {
  setData(state, products) {
    state.productData = products;
  },
  setCartNumber(state, num) {
      state.cartNumber = num
  },
  setCartArray(state, item) {
      state.cartArray.push(item);
  },
  removeCartItem(state, index) {
    state.cartArray.splice(index, 1);
  }
};

export const actions = {
  async setProductData({ commit }) {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();
    commit("setData", data);
  },
};
