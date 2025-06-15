import { Route, Routes } from "react-router-dom";
import Gradista from "./pages/gradista";
import Comum from "./pages/notificacao/NotificacaoManual";
import Revisor from "./pages/revisor";

function App() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Comum />} />
        <Route path="revisor">
          <Route index element={<Revisor />} />
        </Route>
        <Route path="gradista">
          <Route index element={<Gradista />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
