import { Data } from "@/App";

interface GradistaProps {
  data: Data;
}

export default function Revisor({ data }: GradistaProps) {
  return (
    <div className="shadow-md shadow-gray-600/20 rounded-lg p-4 w-full">
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
                <td className="py-1 text-center border-2 border-white">{v}</td>
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
  );
}
