import './App.css';
import HomePage from './pages/homepage/homepage.component';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Shop from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { useEffect, useState } from 'react';
import { auth } from './firebase/firebase.utils';

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      console.log(currentUser);
    });
    return unsubscribeFromAuth();
  });

  return (
    <Router>
      <div className="App">
        <Header currentUser={currentUser} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/signin" element={<SignInAndSignUp />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
