// *NP3 session 2 questions

const storeData = {
  women: {
    top: {
      id: "at12",
      availability: [
        { id: 1, color: "blue", quantity: 5, inStock: true },
        { id: 2, color: "black", quantity: 3, inStock: true },
      ],
    },
    jeans: {
      id: "aj12",
      availability: [
        { id: 3, color: "dark blue", quantity: 0, inStock: false },
        { id: 4, color: "dark blue", quantity: 5, inStock: true },
        { id: 5, color: "black", quantity: 5, inStock: true },
      ],
    },
    purse: {
      id: "ap12",
      availability: [
        { id: 6, color: "red", quantity: 5, inStock: true },
        { id: 7, color: "white", quantity: 0, inStock: false },
      ],
    },
  },
  men: {
    shirt: {
      id: "ms12",
      availability: [
        { id: 8, color: "yellow", quantity: 5, inStock: true },
        { id: 9, color: "black", quantity: 3, inStock: true },
      ],
    },
    jeans: {
      id: "mj12",
      availability: [
        { id: 10, color: "blue", quantity: 0, inStock: false },
        { id: 11, color: "black", quantity: 9, inStock: true },
      ],
    },
    wallet: {
      id: "mw12",
      availability: [
        { id: 12, color: "blue", quantity: 15, inStock: true },
        { id: 13, color: "black", quantity: 10, inStock: true },
      ],
    },
  },
};
// Find and console the quantity of dark blue women jeans in stock.
console.log(
  storeData.women.jeans.availability.reduce((acc, curr) => {
    if (curr.color === "dark blue" && curr.inStock) {
      return acc + curr.quantity;
    }
    return acc;
  }, 0)
);
// Get the total quantity of men’s wallet.
console.log(
  storeData.men.wallet.availability.reduce(
    (acc, curr) => {
      if (curr.inStock) {
        return {
          ...acc,
          menWalletQuantity: acc.menWalletQuantity + curr.quantity,
        };
      }
      return { ...acc };
    },
    { menWalletQuantity: 0 }
  )
);
