
import './App.css';
import NavBar from './components/navbar';
import About from './pages/about';
import HomePage from './pages/homepage';
import Products from './pages/products';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <section>
        <HomePage/>
      </section>
      <section>
        <About/>
      </section>
      <section>
        <Products/>
      </section>
    </div>
  );
}

export default App;
