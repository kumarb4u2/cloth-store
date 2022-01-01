import './cart-icon.styles.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';

const CartIcon = ({ toggleCartHidden, quantity }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingIcon />
    <span className="item-count">{quantity}</span>
  </div>
);

const mapDispatcToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = createStructuredSelector({
  quantity: selectCartItemsCount,
});

export default connect(mapStateToProps, mapDispatcToProps)(CartIcon);
