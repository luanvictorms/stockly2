"use client";

import { Badge } from "@/app/_components/ui/badge";
import { Product } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import { CircleIcon } from "lucide-react";

const getStatusLabel = (status: string) => {
  if (status === "IN_STOCK") {
    return "Em estoque";
  }
  return "Fora de estoque";
};

export const productTableColumns: ColumnDef<Product>[] = [
  {
    accessorKey: "name",
    header: "Produto",
  },
  {
    accessorKey: "price",
    header: "Valor Unitario",
  },
  {
    accessorKey: "stock",
    header: "Estoque",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: (row) => {
      const product = row.row.original;
      const label = getStatusLabel(product.status);
      return (
        <Badge
          variant={label === "Em estoque" ? "default" : "outline"}
          className="gap-1.5"
        >
          <CircleIcon
            className={`${label === "Em estoque" ? "fill-primary-foreground" : "fill-destructive-foreground"}`}
            size={14}
          />
          {label}
        </Badge>
      );
    },
  },
];
