import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import HomeScreen from './pages/HomeScreen';
import ProductScreen from './pages/ProductScreen';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Link to="/">Shopping App</Link>
        </header>
        <main>
          <Routes>
            <Route path="/product/:slug" element={<ProductScreen />}></Route>
            <Route path="/" element={<HomeScreen />}></Route>
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
