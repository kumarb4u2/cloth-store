import './App.css';
import HomePage from './pages/homepage/homepage.component';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Shop from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user.selectors';
import CheckoutPage from './pages/checkout/checkout.component';
import CollectionPage from './pages/collection/collection.component';
import { checkUserSession } from './redux/user/user.actions';
import { useEffect } from 'react';

function App({ currentUser, checkUserSession }) {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<Shop />}>
            <Route path=":collectionId" element={<CollectionPage />} />
          </Route>
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route
            path="/signin"
            element={currentUser ? <Navigate to="/" /> : <SignInAndSignUp />}
          />
        </Routes>
      </div>
    </Router>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});
const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
