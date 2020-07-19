export const initialState = {
  basket: ['fsajdf', 'fdasf'],
};

function reducer(state, action) {
  switch (action.type) {
    case "ADD_TO_BASKET":
      //LOGIC FOR ADDDING ITEMS TO BASKET
      break;
    case "REMOVE_FROM_BASKET":
      //logic for removing item from basket
      break;
    default:
      return state;
  }
}

export default reducer;
