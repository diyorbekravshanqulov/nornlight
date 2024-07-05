export const usePiniaStore = defineStore("pinia", {
  state() {
    return {
      likedProducts: [],
      basket: [],
      modalClick: false,
      totalPrice: 0,
    };
  },
  actions: {
    addProductToLiked(product) {
      const index = this.likedProducts.findIndex(
        (item) => item.id === product.id
      );

      if (index === -1) {
        this.likedProducts.push(product);
      } else {
        this.likedProducts.splice(index, 1);
      }
      console.log(this.likedProducts);
    },
    addToBasket(product) {
      const index = this.basket.findIndex((item) => item.id === product.id);
      if (index === -1) {
        this.basket.push(product);
      } else {
        this.basket.splice(index, 1);
      }

      console.log(this.basket);
    },
    removeFromBasket(productId) {
      const index = this.basket.findIndex((item) => item.id === productId);
      if (index !== -1) {
        this.basket.splice(index, 1);
      }
    },
  },
  persist: true,
});
