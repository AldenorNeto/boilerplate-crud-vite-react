import { Data } from '@/App';
import chinelaIcons from '@/assets/chinelaIcons.png';
import grendeneLogo from '@/assets/grendene-logo-0.png';
import { useEffect, useRef, useState } from 'react';

interface ProviderProps {
  title: string;
  children?: React.ReactNode;
  data: Data;
}

export default function Provider({ title, children, data }: ProviderProps) {
  const { produto } = data;
  const [timestamp, setTimestamp] = useState('');
  const imgRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formatted = new Intl.DateTimeFormat('pt-BR', {
        dateStyle: 'short',
        timeStyle: 'medium',
      })
        .format(now)
        .replace(',', '');
      setTimestamp(formatted);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleImageError = () => {
    if (imgRef.current) {
      imgRef.current.src = chinelaIcons;
    }
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
        <span className="w-3/12 flex font-semibold">{timestamp}</span>
      </div>

      <div className="w-full flex justify-center">
        <div className="mb-6 flex w-11/12 gap-3">
          <div className="w-full p-1 rounded-sm shadow-md shadow-gray-500/15">
            <div className="p-1">
              <div className="text-center font-semibold text-gray-900">
                <div className="p-1 m-[2px] mb-0 bg-slate-300">{title}</div>
              </div>
              <div>
                <table className="w-full border-separate">
                  <tbody>
                    <tr className="bg-slate-300">
                      <td className="text-center px-3 py-2 text-sm">Produto</td>
                      <td className="text-center bg-slate-200 px-3 py-2 font-bold text-sm">
                        {produto.descricao}
                      </td>
                      <td className="text-center px-3 py-2 text-sm">
                        Equipamento
                      </td>
                      <td className="text-center bg-slate-200 px-3 py-2 font-bold text-sm">
                        {produto.equipamento}
                      </td>
                    </tr>
                    <tr className="bg-slate-300">
                      <td className="text-center px-3 py-2 text-sm">
                        Programa
                      </td>
                      <td className="text-center bg-slate-200 px-3 py-2 font-bold text-sm">
                        {produto.programa} - {produto.documento}
                      </td>
                      <td className="text-center px-3 py-2 text-sm">Cor</td>
                      <td className="text-center bg-slate-200 px-3 py-2 font-bold text-sm">
                        {produto.cor}
                      </td>
                    </tr>
                    <tr className="bg-slate-300">
                      <td className="text-center px-3 py-2 text-sm">PE</td>
                      <td className="text-center bg-slate-200 px-3 py-2 font-bold text-sm">
                        {produto.pE}
                      </td>
                      <td className="text-center px-3 py-2 text-sm">
                        Padrão Crono
                      </td>
                      <td className="text-center bg-slate-200 px-3 py-2 font-bold text-sm">
                        {produto.padraoCrono}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <img
              ref={imgRef}
              src={produto.amostra}
              alt="amostra"
              onError={handleImageError}
              className="h-40 rounded-sm shadow-md shadow-gray-500/15"
            />
          </div>
        </div>
      </div>

      <div className="shadow-md shadow-gray-600/20 rounded-lg p-4 w-full">
        {children}
      </div>
      <footer className="text-center text-xs text-[#3d4199] mt-6">
        Desenvolvido por Tecnologia de Manufatura
      </footer>
    </div>
  );
}
