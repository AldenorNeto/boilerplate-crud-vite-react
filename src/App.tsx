import { Route, Routes } from 'react-router-dom';
import Comum from './pages/comum';
import Gradista from './pages/gradista';
import Provider from './pages/providerEmbalagem';
import Revisor from './pages/revisor';

export interface Data {
  produto: Produto;
  gradista: Gradista;
  revisor: Revisor;
}

export interface Gradista {
  columns: Column[];
  rows: Row[];
  tempoOrdemMinutos: number;
}

export interface Revisor {
  SSCC: string;
  totalCaixas: number;
  totalParesCaixa: number;
  grade: string;
  revisao: string;
}

export interface Column {
  name: string;
  total: number;
}

export interface Row {
  id: string;
  qtd: number;
  values: (number | null)[];
}

export interface Produto {
  descricao: string;
  equipamento: string;
  programa: string;
  documento: string;
  cor: string;
  pE: string;
  padraoCrono: string;
  amostra: string;
}

const data: Data = {
  produto: {
    descricao: 'MELISSA SUN DOWNTOWN AD',
    equipamento: 'S7E01',
    programa: '709017',
    documento: '22',
    cor: 'AZUL CANETA',
    pE: '28',
    padraoCrono: '191',
    amostra:
      'https://images.tcdn.com.br/img/img_prod/963117/chinelo_ipanema_solar_26979_30018563_1_28d98da105f2b670cc79e5ca79533c9f.jpg',
  },
  revisor: {
    SSCC: '00478902440731642807',
    totalCaixas: 76,
    totalParesCaixa: 12,
    grade: '023239',
    revisao: '08030',
  },
  gradista: {
    tempoOrdemMinutos: 10,
    columns: [
      { name: '0234', total: 30 },
      { name: '0256', total: 57 },
      { name: '0278', total: 74 },
      { name: '0293', total: 56 },
      { name: '0312', total: 56 },
      { name: '0334', total: 52 },
      { name: '0350', total: 8 },
      { name: '0360', total: 3 },
    ],
    rows: [
      { id: '08030', qtd: 1, values: [1, 2, 2, 2, 2, 1, 1, 1] },
      { id: '08853', qtd: 2, values: [1, 2, 2, 2, 2, 2, 2, 1] },
      { id: '08429', qtd: 3, values: [1, 2, 2, 2, 2, 2, 1, null] },
      { id: '20955', qtd: 3, values: [1, 3, 3, 2, 2, 1, null, null] },
      { id: '08031', qtd: 4, values: [2, 2, 2, 2, 2, 2, null, null] },
      { id: '20955', qtd: 15, values: [1, 2, 3, 2, 2, 2, null, null] },
    ],
  },
};

function App() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Comum />} />
        <Route path="gradista">
          <Route
            index
            element={
              <Provider data={data} title="Tela Gradista">
                <Gradista data={data} />
              </Provider>
            }
          />
        </Route>
        <Route path="revisor">
          <Route
            index
            element={
              <Provider data={data} title="Tela Revisor">
                <Revisor data={data} />
              </Provider>
            }
          />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
