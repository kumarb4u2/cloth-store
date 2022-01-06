import './stripe-button.styles.scss';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStrip = price * 100;
  const publishableKey =
    'pk_test_51KEy6LSFd98URcLhNMhvGeoWMffHSYZ2Oob9AwnZYIFQSYotVtM2ijmDDoeuNWdYAncanXEUdu5bcWQoi3jHYzbN00298YKYtg';

  const onToken = (token) => {
    console.log(token);
    alert('Payment is successful.');
  };

  return (
    <StripeCheckout
      label="Pay now"
      name="Shopping site"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStrip}
      panelLabel="Pay now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
