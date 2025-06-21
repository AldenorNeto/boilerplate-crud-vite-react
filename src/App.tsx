import { Route, Routes } from "react-router-dom";
import Comum from "./pages/comum";
import Gradista from "./pages/gradista";
import Provider from "./pages/providerEmbalagem";
import Revisor from "./pages/revisor";

export interface Data {
  productInfo: ProductInfo[];
  SSCC: string;
  tamanho: string[];
  qtdPares: number[];
  totalCaixas: number;
  totalParesCaixa: number;
  grade: string;
  grades: Grade[];
  foot: Foot;
  amostra: string;
}

export interface ProductInfo {
  label: string;
  value: string;
}

export interface Grade {
  grade: string;
  qtd: number;
  values: number[];
  revisao: boolean;
}

export interface Foot {
  totalPairsNum: number;
  firstSums: number[];
  secondSums: number[];
  totalPairs: number;
  orderTime: number;
}

const data = {
  productInfo: [
    { label: "Produto", value: "MELISSA SUN DOWNTOWN AD" },
    { label: "Equipamento", value: "S7E01" },
    { label: "Programa", value: "709017 - 22" },
    { label: "Cor", value: "AZUL CANETA" },
    { label: "PE", value: "28" },
    { label: "Padrão Crono", value: "191" },
  ],
  SSCC: "00478902440731642807",
  tamanho: ["0234", "0256", "0278", "0293", "0312", "0334", "0350"],
  qtdPares: [1, 2, 2, 2, 2, 1, 1, 1],
  totalCaixas: 76,
  totalParesCaixa: 12,
  grade: "023239",
  grades: [
    { grade: "08030", qtd: 1, values: [1, 2, 2, 2, 2, 1, 1, 1], revisao: true },
    {
      grade: "08853",
      qtd: 2,
      values: [1, 2, 2, 2, 2, 2, 2, 1],
      revisao: false,
    },
    {
      grade: "08429",
      qtd: 3,
      values: [1, 2, 2, 2, 2, 2, 1, 0],
      revisao: false,
    },
    {
      grade: "20955",
      qtd: 3,
      values: [1, 3, 3, 2, 2, 1, 0, 0],
      revisao: false,
    },
    {
      grade: "08031",
      qtd: 4,
      values: [2, 2, 2, 2, 2, 2, 0, 0],
      revisao: false,
    },
    {
      grade: "20955",
      qtd: 15,
      values: [1, 2, 3, 2, 2, 2, 0, 0],
      revisao: false,
    },
  ],
  foot: {
    totalPairsNum: 28,
    firstSums: [30, 57, 74, 56],
    secondSums: [56, 52, 8, 3],
    totalPairs: 336,
    orderTime: 10,
  },
  amostra:
    "https://images.tcdn.com.br/img/img_prod/963117/chinelo_ipanema_solar_26979_30018563_1_28d98da105f2b670cc79e5ca79533c9f.jpg",
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
