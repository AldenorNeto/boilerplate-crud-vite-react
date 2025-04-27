import { Plus } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { TabelaSistemas } from "./SistsTable";

export default function SistemaList() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Sistemas</h1>
        <Button asChild>
          <Link to="/cadastro/new" className="bg-white border ">
            <Plus className="mr-2 h-4 w-4" /> Add Sistema
          </Link>
        </Button>
      </div>
      <TabelaSistemas />
    </div>
  );
}
