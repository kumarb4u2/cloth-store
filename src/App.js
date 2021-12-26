import './App.css';
import HomePage from './pages/homepage/homepage.component';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
} from 'react-router-dom';
import Shop from './pages/shop/shop.component';

const Topic = (props) => {
  const param = useParams();
  return <div>{param.topicId}</div>;
};

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop/:topicId" element={<Topic />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
