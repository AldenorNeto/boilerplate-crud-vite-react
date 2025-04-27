import { DataTable } from "@/components/data-table/data-table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ColumnDef } from "@tanstack/react-table";
import { Eye, MoreHorizontal, PlusCircle, Repeat } from "lucide-react";
import { Link } from "react-router-dom";

type Notificacao = {
  id: string;
  titulo: string;
  mensagem: string;
  plataforma: "iOS" | "Android" | "Web" | "Todos";
  dataEnvio: Date;
  destinatarios: number;
  status: "entregue" | "falha" | "pendente";
  socketId?: string;
};

const data: Notificacao[] = [
  {
    id: "NOTIF-001",
    titulo: "Manutenção S6M02",
    mensagem: "Máquina S6M02 em parada...",
    plataforma: "Todos",
    dataEnvio: new Date(2024, 2, 15),
    destinatarios: 2541,
    status: "entregue",
    socketId: "SOCK-789",
  },
  {
    id: "NOTIF-002",
    titulo: "Atualização Necessária",
    mensagem: "Aplicação precisa ser atualizada...",
    plataforma: "Android",
    dataEnvio: new Date(2024, 2, 14),
    destinatarios: 842,
    status: "falha",
    socketId: "SOCK-456",
  },
  {
    id: "NOTIF-003",
    titulo: "Troca de Matriz",
    mensagem: "Matrizaria F6 Troca de Matriz",
    plataforma: "Web",
    dataEnvio: new Date(2024, 2, 13),
    destinatarios: 154,
    status: "pendente",
  },
  {
    id: "NOTIF-004",
    titulo: "Alerta",
    mensagem: "Performance acima do limite...",
    plataforma: "iOS",
    dataEnvio: new Date(2024, 2, 12),
    destinatarios: 921,
    status: "entregue",
    socketId: "SOCK-123",
  },
];

export default function HistoricoNotificacoes() {
  const columns: ColumnDef<Notificacao>[] = [
    {
      accessorKey: "id",
      header: "key",
      cell: ({ row }) => <div className="font-mono">{row.getValue("id")}</div>,
    },
    {
      accessorKey: "titulo",
      header: "Título",
      cell: ({ row }) => (
        <div className="font-medium">{row.getValue("titulo")}</div>
      ),
    },
    {
      accessorKey: "mensagem",
      header: "Mensagem",
      cell: ({ row }) => (
        <div className="max-w-[300px] truncate">{row.getValue("mensagem")}</div>
      ),
    },
    {
      accessorKey: "plataforma",
      header: "Plataforma",
      cell: ({ row }) => (
        <Badge variant="outline" className="capitalize">
          {row.getValue("plataforma")}
        </Badge>
      ),
    },
    {
      accessorKey: "dataEnvio",
      header: "Data de Envio",
      cell: ({ row }) => {
        const date = new Date(row.getValue("dataEnvio"));
        return <div>{date.toLocaleDateString("pt-BR")}</div>;
      },
    },
    {
      accessorKey: "destinatarios",
      header: "Destinatários",
      cell: ({ row }) => (
        <div>{row.getValue("destinatarios")?.toLocaleString()}</div>
      ),
    },
    {
      accessorKey: "status",
      header: "Status",
      cell: ({ row }) => {
        const status = row.getValue("status") as string;
        return (
          <Badge
            variant={
              status === "entregue"
                ? "success"
                : status === "pendente"
                ? "warning"
                : "destructive"
            }
          >
            {status === "entregue"
              ? "Entregue"
              : status === "pendente"
              ? "Pendente"
              : "Falha"}
          </Badge>
        );
      },
    },
    {
      accessorKey: "socketId",
      header: "Socket Relacionado",
      cell: ({ row }) => (
        <div className="font-mono text-sm">
          {row.getValue("socketId") || "N/A"}
        </div>
      ),
    },
    {
      id: "acoes",
      cell: ({ row }) => {
        const notificacao = row.original;
        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Abrir menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Ações</DropdownMenuLabel>
              <DropdownMenuItem
                onClick={() => navigator.clipboard.writeText(notificacao.id)}
              >
                Copiar ID
              </DropdownMenuItem>
              {notificacao.socketId && (
                <DropdownMenuItem
                  onClick={() =>
                    navigator.clipboard.writeText(notificacao.socketId!)
                  }
                >
                  Copiar Socket ID
                </DropdownMenuItem>
              )}
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link to={`/notificacoes/${notificacao.id}`}>
                  <Eye className="mr-2 h-4 w-4" /> Detalhes
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleReenviar(notificacao)}>
                <Repeat className="mr-2 h-4 w-4" /> Reenviar
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        );
      },
    },
  ];

  const handleReenviar = (notificacao: Notificacao) => {
    console.log("Reenviando:", notificacao.id);
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-semibold">Histórico de Notificações</h1>
        <Button asChild>
          <Link to="#">
            <PlusCircle className="mr-2 h-4 w-4" /> Nova Notificação
          </Link>
        </Button>
      </div>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
