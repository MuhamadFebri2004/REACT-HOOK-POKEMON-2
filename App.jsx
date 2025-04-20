import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PokemonDetail from './pages/PokemonDetail';
import { PokemonProvider } from './context/PokemonContext';

function App() {
  return (
    <PokemonProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemon/:id" element={<PokemonDetail />} />
        </Routes>
      </BrowserRouter>
    </PokemonProvider>
  );
}

export default App;
