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
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      //LOGIC FOR ADDDING ITEMS TO BASKET
      return { ...state, basket: [...state.basket, action.item] };
    case "REMOVE_FROM_BASKET":
      //logic for removing item from basket
      return { state };
    default:
      return state;
  }
};

export default reducer;
