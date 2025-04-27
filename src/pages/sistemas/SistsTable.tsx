import type { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal, Pencil, Trash } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

import { DataTable } from "../../components/data-table/data-table";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../components/ui/dropdown-menu";
import { DialogoExcluirSistema } from "./DeleteSistDialog";

type System = {
  id: string;
  nome: string;
  descricao: string;
  consumo: number;
  consumidores: number;
  status: "ativo" | "dev" | "inativo";
};

const data: System[] = [
  {
    id: "SIS-001",
    nome: "Sistema de Autenticação",
    descricao: "Gerencia autenticação e autorização",
    consumo: 85,
    consumidores: 1500,
    status: "ativo",
  },
  {
    id: "SIS-002",
    nome: "Gateway de Pagamento",
    descricao: "Processa transações financeiras",
    consumo: 45,
    consumidores: 320,
    status: "ativo",
  },
  {
    id: "SIS-003",
    nome: "Módulo de Relatórios",
    descricao: "Gera relatórios gerenciais",
    consumo: 92,
    consumidores: 780,
    status: "dev",
  },
  {
    id: "SIS-004",
    nome: "Serviço de E-mail",
    descricao: "Gerencia comunicações por e-mail",
    consumo: 0,
    consumidores: 0,
    status: "inativo",
  },
  {
    id: "SIS-005",
    nome: "Gestão de Estoque",
    descricao: "Controla níveis de estoque de produtos",
    consumo: 68,
    consumidores: 450,
    status: "ativo",
  },{
    id: "SIS-001",
    nome: "Sistema de Autenticação",
    descricao: "Gerencia autenticação e autorização",
    consumo: 85,
    consumidores: 1500,
    status: "ativo",
  },
  {
    id: "SIS-002",
    nome: "Gateway de Pagamento",
    descricao: "Processa transações financeiras",
    consumo: 45,
    consumidores: 320,
    status: "ativo",
  },
  {
    id: "SIS-003",
    nome: "Módulo de Relatórios",
    descricao: "Gera relatórios gerenciais",
    consumo: 92,
    consumidores: 780,
    status: "dev",
  },
  {
    id: "SIS-004",
    nome: "Serviço de E-mail",
    descricao: "Gerencia comunicações por e-mail",
    consumo: 0,
    consumidores: 0,
    status: "inativo",
  },
  {
    id: "SIS-005",
    nome: "Gestão de Estoque",
    descricao: "Controla níveis de estoque de produtos",
    consumo: 68,
    consumidores: 450,
    status: "ativo",
  },{
    id: "SIS-001",
    nome: "Sistema de Autenticação",
    descricao: "Gerencia autenticação e autorização",
    consumo: 85,
    consumidores: 1500,
    status: "ativo",
  },
  {
    id: "SIS-002",
    nome: "Gateway de Pagamento",
    descricao: "Processa transações financeiras",
    consumo: 45,
    consumidores: 320,
    status: "ativo",
  },
  {
    id: "SIS-003",
    nome: "Módulo de Relatórios",
    descricao: "Gera relatórios gerenciais",
    consumo: 92,
    consumidores: 780,
    status: "dev",
  },
  {
    id: "SIS-004",
    nome: "Serviço de E-mail",
    descricao: "Gerencia comunicações por e-mail",
    consumo: 0,
    consumidores: 0,
    status: "inativo",
  },
  {
    id: "SIS-005",
    nome: "Gestão de Estoque",
    descricao: "Controla níveis de estoque de produtos",
    consumo: 68,
    consumidores: 450,
    status: "ativo",
  },{
    id: "SIS-001",
    nome: "Sistema de Autenticação",
    descricao: "Gerencia autenticação e autorização",
    consumo: 85,
    consumidores: 1500,
    status: "ativo",
  },
  {
    id: "SIS-002",
    nome: "Gateway de Pagamento",
    descricao: "Processa transações financeiras",
    consumo: 45,
    consumidores: 320,
    status: "ativo",
  },
  {
    id: "SIS-003",
    nome: "Módulo de Relatórios",
    descricao: "Gera relatórios gerenciais",
    consumo: 92,
    consumidores: 780,
    status: "dev",
  },
  {
    id: "SIS-004",
    nome: "Serviço de E-mail",
    descricao: "Gerencia comunicações por e-mail",
    consumo: 0,
    consumidores: 0,
    status: "inativo",
  },
  {
    id: "SIS-005",
    nome: "Gestão de Estoque",
    descricao: "Controla níveis de estoque de produtos",
    consumo: 68,
    consumidores: 450,
    status: "ativo",
  },{
    id: "SIS-001",
    nome: "Sistema de Autenticação",
    descricao: "Gerencia autenticação e autorização",
    consumo: 85,
    consumidores: 1500,
    status: "ativo",
  },
  {
    id: "SIS-002",
    nome: "Gateway de Pagamento",
    descricao: "Processa transações financeiras",
    consumo: 45,
    consumidores: 320,
    status: "ativo",
  },
  {
    id: "SIS-003",
    nome: "Módulo de Relatórios",
    descricao: "Gera relatórios gerenciais",
    consumo: 92,
    consumidores: 780,
    status: "dev",
  },
  {
    id: "SIS-004",
    nome: "Serviço de E-mail",
    descricao: "Gerencia comunicações por e-mail",
    consumo: 0,
    consumidores: 0,
    status: "inativo",
  },
  {
    id: "SIS-005",
    nome: "Gestão de Estoque",
    descricao: "Controla níveis de estoque de produtos",
    consumo: 68,
    consumidores: 450,
    status: "ativo",
  },{
    id: "SIS-001",
    nome: "Sistema de Autenticação",
    descricao: "Gerencia autenticação e autorização",
    consumo: 85,
    consumidores: 1500,
    status: "ativo",
  },
  {
    id: "SIS-002",
    nome: "Gateway de Pagamento",
    descricao: "Processa transações financeiras",
    consumo: 45,
    consumidores: 320,
    status: "ativo",
  },
  {
    id: "SIS-003",
    nome: "Módulo de Relatórios",
    descricao: "Gera relatórios gerenciais",
    consumo: 92,
    consumidores: 780,
    status: "dev",
  },
  {
    id: "SIS-004",
    nome: "Serviço de E-mail",
    descricao: "Gerencia comunicações por e-mail",
    consumo: 0,
    consumidores: 0,
    status: "inativo",
  },
  {
    id: "SIS-005",
    nome: "Gestão de Estoque",
    descricao: "Controla níveis de estoque de produtos",
    consumo: 68,
    consumidores: 450,
    status: "ativo",
  },{
    id: "SIS-001",
    nome: "Sistema de Autenticação",
    descricao: "Gerencia autenticação e autorização",
    consumo: 85,
    consumidores: 1500,
    status: "ativo",
  },
  {
    id: "SIS-002",
    nome: "Gateway de Pagamento",
    descricao: "Processa transações financeiras",
    consumo: 45,
    consumidores: 320,
    status: "ativo",
  },
  {
    id: "SIS-003",
    nome: "Módulo de Relatórios",
    descricao: "Gera relatórios gerenciais",
    consumo: 92,
    consumidores: 780,
    status: "dev",
  },
  {
    id: "SIS-004",
    nome: "Serviço de E-mail",
    descricao: "Gerencia comunicações por e-mail",
    consumo: 0,
    consumidores: 0,
    status: "inativo",
  },
  {
    id: "SIS-005",
    nome: "Gestão de Estoque",
    descricao: "Controla níveis de estoque de produtos",
    consumo: 68,
    consumidores: 450,
    status: "ativo",
  },{
    id: "SIS-001",
    nome: "Sistema de Autenticação",
    descricao: "Gerencia autenticação e autorização",
    consumo: 85,
    consumidores: 1500,
    status: "ativo",
  },
  {
    id: "SIS-002",
    nome: "Gateway de Pagamento",
    descricao: "Processa transações financeiras",
    consumo: 45,
    consumidores: 320,
    status: "ativo",
  },
  {
    id: "SIS-003",
    nome: "Módulo de Relatórios",
    descricao: "Gera relatórios gerenciais",
    consumo: 92,
    consumidores: 780,
    status: "dev",
  },
  {
    id: "SIS-004",
    nome: "Serviço de E-mail",
    descricao: "Gerencia comunicações por e-mail",
    consumo: 0,
    consumidores: 0,
    status: "inativo",
  },
  {
    id: "SIS-005",
    nome: "Gestão de Estoque",
    descricao: "Controla níveis de estoque de produtos",
    consumo: 68,
    consumidores: 450,
    status: "ativo",
  },{
    id: "SIS-001",
    nome: "Sistema de Autenticação",
    descricao: "Gerencia autenticação e autorização",
    consumo: 85,
    consumidores: 1500,
    status: "ativo",
  },
  {
    id: "SIS-002",
    nome: "Gateway de Pagamento",
    descricao: "Processa transações financeiras",
    consumo: 45,
    consumidores: 320,
    status: "ativo",
  },
  {
    id: "SIS-003",
    nome: "Módulo de Relatórios",
    descricao: "Gera relatórios gerenciais",
    consumo: 92,
    consumidores: 780,
    status: "dev",
  },
  {
    id: "SIS-004",
    nome: "Serviço de E-mail",
    descricao: "Gerencia comunicações por e-mail",
    consumo: 0,
    consumidores: 0,
    status: "inativo",
  },
  {
    id: "SIS-005",
    nome: "Gestão de Estoque",
    descricao: "Controla níveis de estoque de produtos",
    consumo: 68,
    consumidores: 450,
    status: "ativo",
  },
];

export function TabelaSistemas() {
  const [dialogoExclusaoAberto, setDialogoExclusaoAberto] = useState(false);
  const [sistemaParaExcluir, setSistemaParaExcluir] = useState<System | null>(
    null
  );

  const handleExcluir = (sistema: System) => {
    setSistemaParaExcluir(sistema);
    setDialogoExclusaoAberto(true);
  };

  const columns: ColumnDef<System>[] = [
    {
      accessorKey: "id",
      header: "Key",
      cell: ({ row }) => <div className="font-mono">{row.getValue("id")}</div>,
    },
    {
      accessorKey: "nome",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Nome do Sistema
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        );
      },
      cell: ({ row }) => <div>{row.getValue("nome")}</div>,
    },
    {
      accessorKey: "descricao",
      header: "Descrição",
      cell: ({ row }) => <div>{row.getValue("descricao")}</div>,
    },
    {
      accessorKey: "consumo",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Consumo (%)
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        );
      },
      cell: ({ row }) => {
        const consumo = Number.parseFloat(row.getValue("consumo"));
        return <div>{consumo}%</div>;
      },
    },
    {
      accessorKey: "consumidores",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Endpoints Ativos
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        );
      },
      cell: ({ row }) => <div>{row.getValue("consumidores")}</div>,
    },
    {
      accessorKey: "status",
      header: "Status",
      cell: ({ row }) => {
        const status = row.getValue("status") as string;
        return (
          <Badge
            variant={
              status === "ativo"
                ? "success"
                : status === "dev"
                ? "warning"
                : "destructive"
            }
          >
            {status === "ativo"
              ? "Ativo"
              : status === "dev"
              ? "Em Dev"
              : "Inativo"}
          </Badge>
        );
      },
    },
    {
      id: "acoes",
      cell: ({ row }) => {
        const sistema = row.original;
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
                onClick={() => navigator.clipboard.writeText(sistema.id)}
              >
                Copiar Key
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link to={`/cadastro/${sistema.id}`}>
                  <Pencil className="mr-2 h-4 w-4" /> Editar
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleExcluir(sistema)}>
                <Trash className="mr-2 h-4 w-4" /> Desativar
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        );
      },
    },
  ];

  return (
    <>
      <DataTable columns={columns} data={data} />
      <DialogoExcluirSistema
        aberto={dialogoExclusaoAberto}
        onOpenChange={setDialogoExclusaoAberto}
        sistema={sistemaParaExcluir}
      />
    </>
  );
}
