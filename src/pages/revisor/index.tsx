import grendeneLogo from "@/assets/grendene-logo-0.png";
import { useEffect, useState } from "react";

export default function Revisor() {
  const [timestamp, setTimestamp] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formatted = new Intl.DateTimeFormat("pt-BR", {
        dateStyle: "short",
        timeStyle: "medium",
      })
        .format(now)
        .replace(",", "");
      setTimestamp(formatted);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

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
    tamanho: ["0234", "0256", "0278", "0293", "0312", "0334", "0350", "0360"],
    qtdPares: [1, 2, 2, 2, 2, 1, 1, 1],
    totalCaixas: 76,
    totalParesCaixa: 12,
    grade: "023239",
    amostra: "https://images.tcdn.com.br/img/img_prod/963117/chinelo_ipanema_solar_26979_30018563_1_28d98da105f2b670cc79e5ca79533c9f.jpg"
  };

  return (
    <div className="p-4 min-h-screen flex flex-col justify-between items-center w-[150vh]">
      <div className="flex justify-between items-center mb-6 text-[#3d4199] w-full">
        <div className="flex items-center space-x-4 w-full px-10">
          <img src={grendeneLogo} alt="Grendene Logo" className="h-6" />
          <div className="text-xl font-semibold w-full text-center">
            Sistema Embalagem
          </div>
        </div>
        <span className="w-2/12 font-semibold ">{timestamp}</span>
      </div>

      <div className="w-full flex justify-center">
        <div className="mb-6 flex w-11/12 gap-3">
          <div className="w-full p-1 rounded-sm shadow-md shadow-gray-500/15">
            <div className="p-1">
              <div className="text-center font-semibold text-gray-900">
                <div className="p-1 m-[2px] mb-0 bg-slate-300 ">
                  Tela Revisor
                </div>
              </div>
              <div>
                <table className="w-full border-separate">
                  <tbody>
                    <tr className="bg-slate-300">
                      <td className="text-center px-3 py-2 text-sm">Produto</td>
                      <td className="text-center bg-slate-200 px-3 py-2 font-bold text-sm">
                        {data.productInfo[0].value}
                      </td>
                      <td className="text-center px-3 py-2 text-sm">
                        Equipamento
                      </td>
                      <td className="text-center bg-slate-200 px-3 py-2 font-bold text-sm">
                        {data.productInfo[1].value}
                      </td>
                    </tr>
                    <tr className="bg-slate-300">
                      <td className="text-center px-3 py-2 text-sm">
                        Programa
                      </td>
                      <td className="text-center bg-slate-200 px-3 py-2 font-bold text-sm">
                        {data.productInfo[2].value}
                      </td>
                      <td className="text-center px-3 py-2 text-sm">Cor</td>
                      <td className="text-center bg-slate-200 px-3 py-2 font-bold text-sm">
                        {data.productInfo[3].value}
                      </td>
                    </tr>
                    <tr className="bg-slate-300">
                      <td className="text-center px-3 py-2 text-sm">PE</td>
                      <td className="text-center bg-slate-200 px-3 py-2 font-bold text-sm">
                        {data.productInfo[4].value}
                      </td>
                      <td className="text-center px-3 py-2 text-sm">
                        Padrão Crono
                      </td>
                      <td className="text-center bg-slate-200 px-3 py-2 font-bold text-sm">
                        {data.productInfo[5].value}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <img
              src={data.amostra}
              alt="amostra"
              className="h-40 rounded-sm shadow-md shadow-gray-500/15"
            />
          </div>
        </div>
      </div>

      <div className="shadow-md shadow-gray-600/20 rounded-lg p-4 w-11/12">
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse">
            <colgroup>
              {new Array(9).fill(null).map(() => (
                <col className="w-96" />
              ))}
            </colgroup>
            <tbody>
              <tr className="bg-slate-200 font-semibold">
                <td
                  colSpan={2}
                  className="py-1 text-center border-2 border-white text-white bg-[#225f9e]"
                >
                  SSCC
                </td>
                <td
                  colSpan={3}
                  className="px-2 py-1 text-center border-2 border-white text-white bg-[#225f9e]"
                >
                  {data.SSCC}
                </td>
              </tr>
              <tr className="">
                <td
                  colSpan={2}
                  className="py-1 font-normal text-center border-2 border-white"
                ></td>
              </tr>
              <tr className="bg-slate-200 font-semibold">
                <td
                  colSpan={2}
                  className="py-1 font-normal text-center border-2 bg-slate-300 border-white"
                >
                  Total de caixa
                </td>
                <td
                  colSpan={1}
                  className="py-1 text-center border-2 border-white"
                >
                  {data.totalCaixas}
                </td>
                <td
                  colSpan={2}
                  className="py-1 font-normal text-center border-2 bg-slate-300 border-white"
                >
                  Total de pares caixa
                </td>
                <td
                  colSpan={1}
                  className="py-1 text-center border-2 border-white"
                >
                  {data.totalParesCaixa}
                </td>
                <td
                  colSpan={1}
                  className="py-1 font-normal text-center border-2 bg-slate-300 border-white"
                >
                  Grade
                </td>
                <td
                  colSpan={2}
                  className="py-1 text-center border-2 border-white"
                >
                  {data.grade}
                </td>
              </tr>
              <tr className="bg-slate-200">
                <td
                  colSpan={9}
                  className="py-1 font-normal text-center border-2 border-white"
                >
                  Composição da Grade
                </td>
              </tr>
            </tbody>
          </table>
          <div className="pt-1"></div>
          <table className="min-w-full border-collapse">
            <colgroup>
              <col className="w-96" />
              {data.tamanho.map(() => (
                <col className="w-96" />
              ))}
            </colgroup>
            <tbody>
              <tr className="bg-slate-200 font-semibold">
                <td className="py-1 font-normal text-center border-2 bg-slate-300 border-white">
                  Tamanho
                </td>
                {data.tamanho.map((v) => (
                  <td className="py-1 text-center border-2 border-white">
                    {v}
                  </td>
                ))}
              </tr>
              <tr className="bg-slate-200">
                <td className="py-1 font-normal text-center border-2 bg-slate-300 border-white">
                  Qtd. pares
                </td>
                {data.qtdPares.map((v) => (
                  <td className="py-1 font-semibold text-center border-2 bg-[#6c96c4] border-white">
                    {v}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="p-1 w-full h-[30vh]"></div>

      <footer className="text-center text-xs text-[#3d4199] mt-6">
        Desenvolvido por Tecnologia de Manufatura
      </footer>
    </div>
  );
}
