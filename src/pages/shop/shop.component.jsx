import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Outlet, useParams } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import CollectionOverviewContainer from '../../components/collections-overview/collections-overview.container';
import withSpinner from '../../components/with-spinner/with-spinner.component';

import { fetchCollectionStart } from '../../redux/shop/shop.actions';
import {
  selectIsCollectionFetching,
  selectIsCollectionLoaded,
} from '../../redux/shop/shop.selectors';

const OutletWithSpinner = withSpinner(Outlet);

const Shop = ({ fetchCollectionStart, isCollectionLoaded }) => {
  const params = useParams();
  useEffect(() => {
    fetchCollectionStart();
  }, [fetchCollectionStart]);

  return (
    <div className="shop-page">
      {params.collectionId ? (
        <OutletWithSpinner isLoading={!isCollectionLoaded} />
      ) : (
        <CollectionOverviewContainer />
      )}
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionStart: () => dispatch(fetchCollectionStart()),
});

const mapStateToProps = createStructuredSelector({
  isFetching: selectIsCollectionFetching,
  isCollectionLoaded: selectIsCollectionLoaded,
});

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
