import { useState } from 'react';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
import './sign-up.styles.scss';

const SignUp = () => {
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const handleSumbit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, { displayName });
      setDisplayName('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
    } catch (error) {
      console.log(error);
    }
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'displayName') {
      setDisplayName(value);
    } else if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    } else {
      setConfirmPassword(value);
    }
  };

  return (
    <div className="sign-up">
      <h2 className="title">I do not have a account</h2>
      <span>Sign up with your email and password</span>
      <form className="sign-up-form" onSubmit={handleSumbit}>
        <FormInput
          label="Display name"
          handleChange={handleChange}
          name="displayName"
          type="text"
          value={displayName}
          required
        />
        <FormInput
          label="Email"
          handleChange={handleChange}
          name="email"
          type="email"
          value={email}
          required
        />
        <FormInput
          label="Password"
          handleChange={handleChange}
          name="password"
          type="password"
          value={password}
          required
        />
        <FormInput
          label="Confirm password"
          handleChange={handleChange}
          name="confirmPassword"
          type="password"
          value={confirmPassword}
          required
        />
        <CustomButton type="submit">SIGN UP</CustomButton>
      </form>
    </div>
  );
};

export default SignUp;
