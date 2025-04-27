import { Badge } from "@/components/ui/badge";
import { Bell, MessageCircle, Plug, Satellite, Users } from "lucide-react";
import {
  Cell,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
} from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";

const trafficData = [
  { hour: "00h", count: 45 },
  { hour: "04h", count: 120 },
  { hour: "08h", count: 786 },
  { hour: "12h", count: 1502 },
  { hour: "16h", count: 2345 },
  { hour: "20h", count: 1890 },
  { hour: "24h", count: 543 },
];

const platformData = [
  { name: "Mobile", value: 65, color: "#2563eb" },
  { name: "Web", value: 25, color: "#7c3aed" },
  { name: "Desktop", value: 10, color: "#db2777" },
];

const recentNotifications: {
  title: string;
  platform: string;
  status: "success" | "warning" | "destructive";
  time: string;
}[] = [
  {
    title: "Atualização do Sistema",
    platform: "Todos",
    status: "success",
    time: "15:32",
  },
  {
    title: "Beba água",
    platform: "Mobile",
    status: "warning",
    time: "14:45",
  },
  {
    title: "Alerta de Performance",
    platform: "Web",
    status: "destructive",
    time: "13:12",
  },
  {
    title: "HelpChain F3",
    platform: "iOS",
    status: "success",
    time: "11:03",
  },
];

const socketStatus = [
  { label: "Conectados", value: "1,298" },
  { label: "Reconexões", value: "142" },
  { label: "Desconectados", value: "84" },
];

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Notificações Hoje
            </CardTitle>
            <Bell className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">64</div>
            <p className="text-xs text-muted-foreground">
              +15% em relação a ontem
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Sockets Ativos
            </CardTitle>
            <Plug className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">433</div>
            <p className="text-xs text-muted-foreground">
              +32 novas conexões esta hora
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Mensagens Entregues
            </CardTitle>
            <MessageCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">98.4%</div>
            <p className="text-xs text-muted-foreground">
              Taxa de entrega média
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Conexões Ativas
            </CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">245</div>
            <p className="text-xs text-muted-foreground">
              Dispositivos conectados
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Tráfego de Notificações</CardTitle>
            <CardDescription>Últimas 24 horas</CardDescription>
          </CardHeader>
          <CardContent className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={trafficData}>
                <Line
                  type="monotone"
                  dataKey="count"
                  stroke="#2563eb"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Notificações Recentes</CardTitle>
            <CardDescription>Últimas 12 horas</CardDescription>
          </CardHeader>
          <CardContent className="h-[300px] space-y-4 overflow-y-auto">
            {recentNotifications.map((notification, index) => (
              <div key={index} className="flex items-center justify-between">
                <div>
                  <p className="font-medium">{notification.title}</p>
                  <p className="text-sm text-muted-foreground">
                    Plataforma: {notification.platform}
                  </p>
                </div>
                <div className="flex justify-between items-center w-2/5">
                  <div className="flex justify-center items-center w-1/2">
                    <Badge variant={notification.status}>
                      {notification.status === "success" && "Entregue"}
                      {notification.status === "warning" && "Pendente"}
                      {notification.status === "destructive" && "Falha"}
                    </Badge>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {notification.time}
                  </span>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Status dos Sockets
            </CardTitle>
            <Satellite className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent className="space-y-2">
            {socketStatus.map((status, index) => (
              <div key={index} className="flex justify-between">
                <span>{status.label}</span>
                <span>{status.value}</span>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="col-span-2">
          <CardHeader>
            <CardTitle>Distribuição por Plataforma</CardTitle>
          </CardHeader>
          <CardContent className="h-[200px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={platformData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                >
                  {platformData.map((entry, index) => (
                    <Cell key={index} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
