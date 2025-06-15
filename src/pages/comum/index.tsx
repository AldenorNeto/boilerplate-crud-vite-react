import { useNavigate } from "react-router-dom";

export default function EscolherCargo() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-[#3d4199]">
        Qual tela?
      </h1>

      <div className="flex gap-10">
        <div
          onClick={() => navigate("/gradista")}
          className="cursor-pointer bg-white shadow-lg hover:shadow-xl transition-shadow rounded-2xl p-10 w-64 text-center border-2 border-[#3d4199]"
        >
          <h2 className="text-2xl font-semibold text-[#3d4199]">Gradista</h2>
        </div>

        <div
          onClick={() => navigate("/revisor")}
          className="cursor-pointer bg-white shadow-lg hover:shadow-xl transition-shadow rounded-2xl p-10 w-64 text-center border-2 border-[#3d4199]"
        >
          <h2 className="text-2xl font-semibold text-[#3d4199]">Revisor</h2>
        </div>
      </div>
    </div>
  );
}
