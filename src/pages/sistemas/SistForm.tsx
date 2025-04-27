import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { z } from "zod";

import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../components/ui/form";
import { Input } from "../../components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import { Textarea } from "../../components/ui/textarea";

type Status = "ativo" | "dev" | "inativo";

const formSchema = z.object({
  nome: z.string().min(2, {
    message: "O nome do sistema deve ter pelo menos 2 caracteres.",
  }),
  descricao: z.string().optional(),
  ambiente: z.string({
    required_error: "Por favor selecione um ambiente.",
  }),
  consumo: z.coerce.number().min(0).max(100, {
    message: "O consumo deve ser entre 0% e 100%.",
  }),
  consumidores: z.coerce
    .number()
    .int({
      message: "O número de consumidores deve ser inteiro.",
    })
    .nonnegative({
      message: "O número de consumidores não pode ser negativo.",
    }),
  status: z.enum(["ativo", "dev", "inativo"]),
});

type FormValues = z.infer<typeof formSchema>;

const sampleSystem = {
  id: "SIS-001",
  nome: "Sistema de Autenticação",
  descricao: "Sistema responsável pela autenticação de usuários",
  ambiente: "Produção",
  consumo: 75,
  consumidores: 1500,
  status: "ativo",
};

export default function FormularioSistema() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const isNewSystem = id === "novo";

  const defaultValues = !isNewSystem
    ? {
        nome: sampleSystem.nome,
        descricao: sampleSystem.descricao,
        ambiente: sampleSystem.ambiente,
        consumo: sampleSystem.consumo,
        consumidores: sampleSystem.consumidores,
        status: sampleSystem.status as Status,
      }
    : {
        nome: "",
        descricao: "",
        ambiente: "",
        consumo: 0,
        consumidores: 0,
        status: "ativo" as Status,
      };

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  useEffect(() => {
    if (!isNewSystem) {
      form.reset({
        ...sampleSystem,
        status: sampleSystem.status as Status,
      });
    } else {
      form.reset({
        nome: "",
        descricao: "",
        ambiente: "",
        consumo: 0,
        consumidores: 0,
        status: "ativo",
      });
    }
  }, [id, form, isNewSystem]);

  async function onSubmit(values: FormValues) {
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log(values);
    setIsSubmitting(false);

    navigate("/cadastro");
  }

  return (
    <div className="space-y-4">
      <h1 className="text-xl font-semibold">
        {isNewSystem ? "Cadastrar Novo Sistema" : "Editar Sistema"}
      </h1>
      <Card>
        <CardContent className="pt-6">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <FormField
                  control={form.control}
                  name="nome"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nome do Sistema</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Digite o nome do sistema"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="ambiente"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Ambiente</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecione um ambiente" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Produção">Produção</SelectItem>
                          <SelectItem value="Homologação">
                            Homologação
                          </SelectItem>
                          <SelectItem value="Desenvolvimento">
                            Desenvolvimento
                          </SelectItem>
                          <SelectItem value="Testes">Testes</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="consumo"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Consumo (%)</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          min="0"
                          max="100"
                          placeholder="0"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        Informe o consumo percentual do sistema
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="consumidores"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Endpoints Ativos</FormLabel>
                      <FormControl>
                        <Input type="number" placeholder="0" {...field} />
                      </FormControl>
                      <FormDescription>
                        Número de sistemas/clientes consumidores
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="status"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Status</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecione o status" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="ativo">Ativo</SelectItem>
                          <SelectItem value="dev">Em Dev</SelectItem>
                          <SelectItem value="inativo">Inativo</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="descricao"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Descrição</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Descreva as funcionalidades do sistema"
                        className="min-h-[120px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex justify-end space-x-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => navigate("/cadastro")}
                  disabled={isSubmitting}
                >
                  Cancelar
                </Button>
                <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting
                    ? "Salvando..."
                    : !isNewSystem
                    ? "Atualizar Sistema"
                    : "Cadastrar Sistema"}
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
