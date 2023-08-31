"use client";

import { BillboardColumn } from "@/components/misc/columns";

interface CellActionProps {
  data: BillboardColumn;
}

export const CellAction: React.FC<CellActionProps> = ({ data }) => {
  return <div>Action</div>;
};
