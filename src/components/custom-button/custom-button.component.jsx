import './custom-button.styles.scss';

const CustomButton = ({ children, isGoogleSignIn, invert, ...rest }) => (
  <button
    className={`${invert ? 'inverted' : ''} ${
      isGoogleSignIn ? 'google-sign-in' : ''
    } custom-button`}
    {...rest}
  >
    {children}
  </button>
);

export default CustomButton;
