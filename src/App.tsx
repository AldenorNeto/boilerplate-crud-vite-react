import { Route, Routes } from "react-router-dom";
import Comum from "./pages/comum";
import Gradista from "./pages/gradista";
import Revisor from "./pages/revisor";

function App() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Comum />} />
        <Route path="gradista">
          <Route index element={<Gradista />} />
        </Route>
        <Route path="revisor">
          <Route index element={<Revisor />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
