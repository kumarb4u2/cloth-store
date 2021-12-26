import { useState } from 'react';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';
import SHOP_DATA from './shop.data';

const Shop = () => {
  const [collections] = useState(SHOP_DATA);
  return (
    <div>
      {collections.map(({ id, ...otherProps }) => (
        <CollectionPreview key={id} {...otherProps} />
      ))}
    </div>
  );
};

export default Shop;
