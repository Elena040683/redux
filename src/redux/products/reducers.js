import { combineReducers } from "redux";

const initState = [
  {id: '1', title: 'product-1'}, 
  {id: '2', title: 'product-2'}, 
  {id: '3', title: 'product-3'},
];

const productsList = (state = initState, action) => {
  switch (action.type) {
    case 'product/add':
      return [...state, action.payload];
      // break;
    case 'product/delete':
      return state.filter(product => product.id !== action.payload);
      // break;
    default:
      return state;
  }
}

const productFilter = (state = '', action) => {
  return state;
}

export const productReducer = combineReducers({
  products: productsList,
  filter: productFilter
})

