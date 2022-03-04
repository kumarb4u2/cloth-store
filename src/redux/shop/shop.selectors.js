import { createSelector } from 'reselect';

const selectShop = (state) => state.shop;

export const selectShopCollection = createSelector(
  [selectShop],
  (shop) => shop.collection
);

export const selectCollection = (collectionUrlParam) =>
  createSelector([selectShopCollection], (collections) =>
    collections ? collections[collectionUrlParam] : null
  );

export const selectCollectionForPreview = createSelector(
  [selectShopCollection],
  (collections) =>
    collections ? Object.keys(collections).map((key) => collections[key]) : []
);

export const selectIsCollectionFetching = createSelector(
  [selectShop],
  (shop) => shop.isFetching
);

export const selectIsCollectionLoaded = createSelector(
  [selectShop],
  (shop) => !!shop.collection
);
