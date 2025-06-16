import grendeneLogo from "@/assets/grendene-logo-0.png";
import { useEffect, useState } from "react";

export default function Gradista() {
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

  const orderTimeMinutes = 10;

  const formatOrderTime = (min: number) => {
    const h = Math.floor(min / 60);
    const m = min % 60;
    return `${h}hs ${m}min`;
  };

  const data = {
    productInfo: [
      { label: "Produto", value: "MELISSA SUN DOWNTOWN AD" },
      { label: "Equipamento", value: "S7E01" },
      { label: "Programa", value: "709017 - 22" },
      { label: "Cor", value: "AZUL CANETA" },
      { label: "PE", value: "28" },
      { label: "Padrão Crono", value: "191" },
    ],
    grades: [
      { grade: "08030", qtd: 1, first: [1, 2, 2, 2], second: [2, 1, 1, 1] },
      { grade: "08853", qtd: 2, first: [1, 2, 2, 2], second: [2, 2, 2, 1] },
      { grade: "08429", qtd: 3, first: [1, 2, 2, 2], second: [2, 2, 1, 0] },
      { grade: "20955", qtd: 3, first: [1, 3, 3, 2], second: [2, 1, 0, 0] },
      { grade: "08031", qtd: 4, first: [2, 2, 2, 2], second: [2, 2, 0, 0] },
      { grade: "20955", qtd: 15, first: [1, 2, 3, 2], second: [2, 2, 0, 0] },
    ],
    foot: {
      totalPairsNum: 28,
      firstSums: [30, 57, 74, 56],
      secondSums: [56, 52, 8, 3],
      totalPairs: 336,
      orderTime: formatOrderTime(orderTimeMinutes),
    },
    amostra:
      "https://images.tcdn.com.br/img/img_prod/963117/chinelo_ipanema_solar_26979_30018563_1_28d98da105f2b670cc79e5ca79533c9f.jpg",
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
                  Tela Gradista
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

      <div className="shadow-md shadow-gray-600/20 rounded-lg p-4 w-full">
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse">
            <colgroup>
              <col className="w-32" />
              <col className="w-20" />
              <col span={4} />
              <col span={4} />
            </colgroup>
            <thead>
              <tr>
                <th className="px-2 py-1 "></th>
                <th className="px-2 py-1 "></th>
                <th
                  colSpan={8}
                  className="px-2 py-2  font-semibold text-gray-900 bg-slate-300 border-2 border-white"
                >
                  Composição das Grades
                </th>
              </tr>
              <tr>
                <th className="px-2 py-1 "></th>
                <th className="px-2 py-1 "></th>
                <th
                  colSpan={4}
                  className="px-2 py-2 bg-[#006045] text-white text-sm border-2 border-white"
                >
                  Primeiro Gradista
                </th>
                <th
                  colSpan={4}
                  className="px-2 py-2 bg-[#225f9e] text-white text-sm border-2 border-white"
                >
                  Segundo Gradista
                </th>
              </tr>
              <tr className="bg-slate-200 text-gray-700">
                <th className="font-normal px-2 py-1 text-center border-2 border-white">
                  Grade
                </th>
                <th className="font-normal px-2 py-1 text-center border-2 border-white">
                  Qtd
                </th>
                {[
                  "0234",
                  "0256",
                  "0278",
                  "0293",
                  "0312",
                  "0334",
                  "0350",
                  "0360",
                ].map((code) => (
                  <th
                    key={code}
                    className="px-2 py-1 text-center border-2 border-white  "
                  >
                    {code}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.grades.map((row, idx) => (
                <tr key={idx}>
                  <td className="px-2 py-1 text-center border-2 border-white bg-slate-200">
                    {row.grade}
                  </td>
                  <td className="px-2 py-1 text-center border-2 border-white bg-slate-200">
                    {row.qtd}
                  </td>
                  {row.first.map((num, i) => (
                    <td
                      key={`f${i}`}
                      className="px-2 py-1 text-center border-2 border-white bg-[#639c7f] font-semibold"
                    >
                      {num}
                    </td>
                  ))}
                  {row.second.map((num, i) => (
                    <td
                      key={`s${i}`}
                      className="px-2 py-1 text-center border-2 border-white bg-[#6c96c4] font-semibold"
                    >
                      {num || ""}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
            <tbody>
              <tr className="bg-slate-200 font-semibold">
                <td className="py-1 font-normal text-center border-2 border-white">
                  Total pares num
                </td>
                <td className="px-2 py-1 font-normal text-center border-2 border-white">
                  {data.foot.totalPairsNum}
                </td>
                {data.foot.firstSums.map((sum, i) => (
                  <td
                    key={`fs${i}`}
                    className="px-2 py-1 text-center border-2 border-white"
                  >
                    {sum}
                  </td>
                ))}
                {data.foot.secondSums.map((sum, i) => (
                  <td
                    key={`ss${i}`}
                    className="px-2 py-1 text-center border-2 border-white"
                  >
                    {sum || ""}
                  </td>
                ))}
              </tr>
            </tbody>
            <tbody>
              <tr className="bg-slate-200 font-semibold">
                <td
                  colSpan={2}
                  className="py-1 font-normal text-center border-2 border-white bg-white"
                ></td>
              </tr>
            </tbody>
            <tfoot className="">
              <tr className="bg-slate-200 font-semibold">
                <td
                  colSpan={2}
                  className="py-1 font-normal text-center border-2 border-white bg-slate-300"
                >
                  Total de pares:
                </td>
                <td
                  colSpan={3}
                  className="px-2 py-1 text-center border-2 border-white"
                >
                  {data.foot.totalPairs}
                </td>
                <td
                  colSpan={2}
                  className="py-1 font-normal text-center border-2 border-white bg-slate-300"
                >
                  Tempo da ordem:
                </td>
                <td
                  colSpan={3}
                  className="px-2 py-1 text-center border-2 border-white"
                >
                  {data.foot.orderTime}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>

      <footer className="text-center text-xs text-[#3d4199] mt-6">
        Desenvolvido por Tecnologia de Manufatura
      </footer>
    </div>
  );
}
