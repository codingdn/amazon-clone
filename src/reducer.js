export const initialState = {
  basket: [
    {
      id: "143543245",
      title:
        "Aucma Stand Mixer,6.5-QT 660W 6-Speed Tilt-Head Food Mixer, Kitchen Electric Mixer with Dough Hook, Wire Whip & Beater (6.5QT, Champagne)",
      price: 118.99,
      rating: 3,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/61FLLaPm-QL._AC_SL1001_.jpg",
    },
  ],
  user: null,
};

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      //LOGIC FOR ADDDING ITEMS TO BASKET
      return { ...state, basket: [...state.basket, action.item] };
    case "REMOVE_FROM_BASKET":
      //logic for removing item from basket
      let newBasket = [...state.basket];
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );

      if (index >= 0) {
        //remove item
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Can't remove product(id: ${action.id}) as its not in the cart `
        );
      }
      return { ...state, basket: newBasket };
    default:
      return state;
  }
};

export default reducer;
