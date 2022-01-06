import { Outlet, useParams } from 'react-router-dom';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';

const Shop = () => {
  const params = useParams();

  return (
    <div className="shop-page">
      {params.collectionId ? <Outlet /> : <CollectionsOverview />}
    </div>
  );
};

export default Shop;
