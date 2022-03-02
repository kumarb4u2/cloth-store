import { useState } from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Outlet, useParams } from 'react-router-dom';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import withSpinner from '../../components/with-spinner/with-spinner.component';
import {
  convertCollectionsSnapshotToMap,
  fireStore,
} from '../../firebase/firebase.utils';
import { updateCollection } from '../../redux/shop/shop.actions';

const CollectionsOverviewWithSpinner = withSpinner(CollectionsOverview);
const OutletWithSpinner = withSpinner(Outlet);

const Shop = ({ updateCollections }) => {
  const params = useParams();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const colletionRef = fireStore.collection('collections');
    colletionRef.get().then((snapshot) => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
      setIsLoading(false);
    });
  }, [updateCollections]);

  return (
    <div className="shop-page">
      {params.collectionId ? (
        <OutletWithSpinner isLoading={isLoading} />
      ) : (
        <CollectionsOverviewWithSpinner isLoading={isLoading} />
      )}
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionsMap) =>
    dispatch(updateCollection(collectionsMap)),
});

export default connect(null, mapDispatchToProps)(Shop);
