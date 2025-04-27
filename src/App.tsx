import { Route, Routes } from "react-router-dom";
import DashboardLayout from "./layouts/DashboardLayout";
import HistoricoNotificacoes from "./pages/consultas/HistoricoNotificacoes";
import Dashboard from "./pages/Dashboard";
import NotificacaoManual from "./pages/notificacao/NotificacaoManual";
import FormularioSistema from "./pages/sistemas/SistForm";
import SistemaList from "./pages/sistemas/SistList";

function App() {
  return (
    <Routes>
      <Route path="/" element={<DashboardLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="cadastro">
          <Route index element={<SistemaList />} />
          <Route path="new" element={<FormularioSistema />} />
          <Route path=":id" element={<FormularioSistema />} />
          <Route path="perfil" element={<div>Página de Perfis</div>} />
        </Route>
        <Route path="consultas">
          <Route index element={<HistoricoNotificacoes />} />
          <Route
            path="dispOnline"
            element={<div>Página de Dispositivos Online</div>}
          />
        </Route>
        <Route path="notificacao">
          <Route index element={<NotificacaoManual />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
