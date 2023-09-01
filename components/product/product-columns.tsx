"use client";

import { ColumnDef } from "@tanstack/react-table";

import { CellAction } from "@/components/product/product-cell-action";

export type ProductColumn = {
  id: string;
  label: string;
  createdAt: string;
};

export const columns: ColumnDef<ProductColumn>[] = [
  {
    accessorKey: "label",
    header: "Label",
  },
  {
    accessorKey: "createdAt",
    header: "Date",
  },
  {
    id: "actions",
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
