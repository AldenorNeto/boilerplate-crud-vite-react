import { useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "../../components/ui/alert-dialog";

interface DialogoExcluirSistemaProps {
  aberto: boolean;
  onOpenChange: (aberto: boolean) => void;
  sistema: {
    id: string;
    nome: string;
  } | null;
}

export function DialogoExcluirSistema({
  aberto,
  onOpenChange,
  sistema,
}: DialogoExcluirSistemaProps) {
  const [excluindo, setExcluindo] = useState(false);

  const handleExclusao = async () => {
    if (!sistema) return;

    setExcluindo(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    setExcluindo(false);
    onOpenChange(false);
  };

  if (!sistema) return null;

  return (
    <AlertDialog open={aberto} onOpenChange={onOpenChange}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Tem certeza?</AlertDialogTitle>
          <AlertDialogDescription>
            Esta ação irá desativar permanentemente o sistema &quot;
            {sistema.nome}&quot; (ID: {sistema.id}). Esta operação não pode ser
            desfeita.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel disabled={excluindo}>Cancelar</AlertDialogCancel>
          <AlertDialogAction
            onClick={handleExclusao}
            disabled={excluindo}
            className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
          >
            {excluindo ? "Desativando..." : "Desativar"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
