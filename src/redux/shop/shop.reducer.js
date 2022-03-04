// import SHOP_DATA from '../../pages/shop/shop.data';
import { ShopActionTypes } from './shop.types';

const INITIAL_STATE = {
  // collection: SHOP_DATA,
  collection: null,
  isFetching: false,
  errorMessage: '',
};

export const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ShopActionTypes.FETCH_COLLECTION_START:
      return {
        ...state,
        isFetching: true,
      };
    case ShopActionTypes.FETCH_COLLECTION_SUCCESS:
      return {
        ...state,
        isFetching: false,
        collection: action.payload,
      };
    case ShopActionTypes.FETCH_COLLECTION_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};
