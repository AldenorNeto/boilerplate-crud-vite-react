import type { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal, Pencil, Trash } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

import { DataTable } from "../../components/data-table/data-table";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { Checkbox } from "../../components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../components/ui/dropdown-menu";
import { DeleteProductDialog } from "./DeleteProductDialog";

type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  stock: number;
  status: "in-stock" | "low-stock" | "out-of-stock";
};

const data: Product[] = [
  {
    id: "PROD-001",
    name: "Wireless Headphones",
    category: "Electronics",
    price: 129.99,
    stock: 45,
    status: "in-stock",
  },
  {
    id: "PROD-002",
    name: "Smart Watch",
    category: "Electronics",
    price: 199.99,
    stock: 28,
    status: "in-stock",
  },
  {
    id: "PROD-003",
    name: "Yoga Mat",
    category: "Fitness",
    price: 29.99,
    stock: 12,
    status: "low-stock",
  },
  {
    id: "PROD-004",
    name: "Coffee Maker",
    category: "Home",
    price: 89.99,
    stock: 0,
    status: "out-of-stock",
  },
  {
    id: "PROD-005",
    name: "Bluetooth Speaker",
    category: "Electronics",
    price: 79.99,
    stock: 32,
    status: "in-stock",
  },
  {
    id: "PROD-006",
    name: "Desk Lamp",
    category: "Home",
    price: 39.99,
    stock: 8,
    status: "low-stock",
  },
  {
    id: "PROD-007",
    name: "Gaming Mouse",
    category: "Electronics",
    price: 59.99,
    stock: 22,
    status: "in-stock",
  },
  {
    id: "PROD-008",
    name: "Water Bottle",
    category: "Fitness",
    price: 19.99,
    stock: 0,
    status: "out-of-stock",
  },
  {
    id: "PROD-008",
    name: "Water Bottle",
    category: "Fitness",
    price: 19.99,
    stock: 0,
    status: "out-of-stock",
  },
  {
    id: "PROD-008",
    name: "Water Bottle",
    category: "Fitness",
    price: 19.99,
    stock: 0,
    status: "out-of-stock",
  },
  {
    id: "PROD-008",
    name: "Water Bottle",
    category: "Fitness",
    price: 19.99,
    stock: 0,
    status: "out-of-stock",
  },
  {
    id: "PROD-008",
    name: "Water Bottle",
    category: "Fitness",
    price: 19.99,
    stock: 0,
    status: "out-of-stock",
  },
  {
    id: "PROD-008",
    name: "Water Bottle",
    category: "Fitness",
    price: 19.99,
    stock: 0,
    status: "out-of-stock",
  },
  {
    id: "PROD-009",
    name: "Backpack",
    category: "Fashion",
    price: 49.99,
    stock: 15,
    status: "in-stock",
  },
  {
    id: "PROD-010",
    name: "Wireless Charger",
    category: "Electronics",
    price: 34.99,
    stock: 7,
    status: "low-stock",
  },
];

export function ProductsTable() {
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [productToDelete, setProductToDelete] = useState<Product | null>(null);

  const handleDelete = (product: Product) => {
    setProductToDelete(product);
    setDeleteDialogOpen(true);
  };

  const columns: ColumnDef<Product>[] = [
    {
      id: "select",
      header: ({ table }) => (
        <Checkbox
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && "indeterminate")
          }
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
        />
      ),
      cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
        />
      ),
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: "id",
      header: "ID",
      cell: ({ row }) => <div className="font-mono">{row.getValue("id")}</div>,
    },
    {
      accessorKey: "name",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Name
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        );
      },
      cell: ({ row }) => <div>{row.getValue("name")}</div>,
    },
    {
      accessorKey: "category",
      header: "Category",
      cell: ({ row }) => <div>{row.getValue("category")}</div>,
    },
    {
      accessorKey: "price",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Price
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        );
      },
      cell: ({ row }) => {
        const price = Number.parseFloat(row.getValue("price"));
        const formatted = new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(price);
        return <div>{formatted}</div>;
      },
    },
    {
      accessorKey: "stock",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Stock
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        );
      },
      cell: ({ row }) => <div>{row.getValue("stock")}</div>,
    },
    {
      accessorKey: "status",
      header: "Status",
      cell: ({ row }) => {
        const status = row.getValue("status") as string;
        return (
          <Badge
            variant={
              status === "in-stock"
                ? "success"
                : status === "low-stock"
                ? "warning"
                : "destructive"
            }
          >
            {status === "in-stock"
              ? "In Stock"
              : status === "low-stock"
              ? "Low Stock"
              : "Out of Stock"}
          </Badge>
        );
      },
    },
    {
      id: "actions",
      cell: ({ row }) => {
        const product = row.original;
        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuItem
                onClick={() => navigator.clipboard.writeText(product.id)}
              >
                Copy ID
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link to={`/products/${product.id}`}>
                  <Pencil className="mr-2 h-4 w-4" /> Edit
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleDelete(product)}>
                <Trash className="mr-2 h-4 w-4" /> Delete
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
      <DeleteProductDialog
        open={deleteDialogOpen}
        onOpenChange={setDeleteDialogOpen}
        product={productToDelete}
      />
    </>
  );
}
