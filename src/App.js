import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './components/Main';
import Home from './components/Home';
import Shop from './components/Shop';
import About from './components/About';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="home" element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default App;
