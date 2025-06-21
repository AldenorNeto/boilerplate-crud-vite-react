import { Data } from '@/App';
import { somatorio } from '@/utils/somatorio';

interface GradistaProps {
  data: Data;
}

function splitInTwo<T>(arr: T[]): [T[], T[]] {
  const middle = Math.ceil(arr.length / 2);
  return [arr.slice(0, middle), arr.slice(middle)];
}

export default function Gradista({ data }: GradistaProps) {
  const { gradista } = data;
  const formatOrderTime = (min: number) => {
    const h = Math.floor(min / 60);
    const m = min % 60;
    return `${h}hs ${m}min`;
  };

  const [firstSizes, secondSizes] = splitInTwo(gradista.columns);

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse">
        <colgroup>
          <col className="w-32" />
          <col className="w-20" />
          <col span={firstSizes.length} />
          <col span={secondSizes.length} />
        </colgroup>
        <thead>
          <tr>
            <th className="px-2 py-1 "></th>
            <th className="px-2 py-1 "></th>
            <th
              colSpan={gradista.columns.length}
              className="px-2 py-2  font-semibold text-gray-900 bg-slate-300 border-2 border-white"
            >
              Composição das Grades
            </th>
          </tr>
          <tr>
            <th className="px-2 py-1 "></th>
            <th className="px-2 py-1 "></th>
            <th
              colSpan={firstSizes.length}
              className="px-2 py-2 bg-[#006045] text-white text-sm border-2 border-white"
            >
              Primeiro Gradista
            </th>
            <th
              colSpan={secondSizes.length}
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
            {firstSizes.map((code) => (
              <th
                key={`fsz-${code}`}
                className="px-2 py-1 text-center border-2 border-white"
              >
                {code.name}
              </th>
            ))}
            {secondSizes.map((code) => (
              <th
                key={`ssz-${code}`}
                className="px-2 py-1 text-center border-2 border-white"
              >
                {code.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {gradista.rows.map((row, idx) => {
            const [firstGradista, secondGradista] = splitInTwo(row.values);
            return (
              <tr key={idx}>
                <td className="px-2 py-1 text-center border-2 border-white bg-slate-200">
                  {row.id}
                </td>
                <td className="px-2 py-1 text-center border-2 border-white bg-slate-200">
                  {row.qtd}
                </td>
                {firstGradista.map((num, i) => (
                  <td
                    key={`f${i}`}
                    className="px-2 py-1 text-center border-2 border-white bg-[#639c7f] font-semibold"
                  >
                    {num}
                  </td>
                ))}
                {secondGradista.map((num, i) => (
                  <td
                    key={`s${i}`}
                    className="px-2 py-1 text-center border-2 border-white bg-[#6c96c4] font-semibold"
                  >
                    {num || ''}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
        <tbody>
          <tr className="bg-slate-200 font-semibold">
            <td className="py-1 font-normal text-center border-2 border-white">
              Total pares num
            </td>
            <td className="px-2 py-1 font-normal text-center border-2 border-white">
              {somatorio(gradista.rows.map((row) => row.qtd))}
            </td>
            {firstSizes.map((sum, i) => (
              <td
                key={`fs${i}`}
                className="px-2 py-1 text-center border-2 border-white"
              >
                {sum.total}
              </td>
            ))}
            {secondSizes.map((sum, i) => (
              <td
                key={`ss${i}`}
                className="px-2 py-1 text-center border-2 border-white"
              >
                {sum.total}
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
        <tfoot>
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
              {somatorio(gradista.columns.map((col) => col.total))}
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
              {formatOrderTime(gradista.tempoOrdemMinutos)}
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
