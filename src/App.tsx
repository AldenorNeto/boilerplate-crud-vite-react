import { Route, Routes } from 'react-router-dom';
import Comum from './pages/comum';

function App() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Comum />} />
      </Route>
    </Routes>
  );
}

export default App;
