import { addProduct, deleteProduct } from "./actions";
import { combineReducers } from "redux";

const initState = [{id: '', title: 'product-1'}];

const productsList = (state = initState, action) => {
  switch (action.type) {
    case 'product/add':
      return [...state, action.payload];
      // break;
    case 'product/delete':
      return state.filter(product => product.id !== action.payload.id);
      // break;
    default:
      return state;
  }
}

const productFilter = (state = "", action) => {
  return state;
}

export const productReducer = combineReducers({
  products: productsList,
  filter: productFilter
})

