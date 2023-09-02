"use client";
import { useParams, useRouter } from "next/navigation";
import { Plus } from "lucide-react";

import { Heading } from "@/components/ui/heading";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { DataTable } from "@/components/ui/data-table";
import { ApiList } from "@/components/ui/api-list";
import { columns } from "@/components/order/order-columns";
import { OrderColumn } from "@/components/order/order-columns";

interface OrdersClientProps {
  data: OrderColumn[];
}

export const OrdersClient: React.FC<OrdersClientProps> = ({ data }) => {
  const router = useRouter();
  const params = useParams();
  return (
    <>
      <div className="flex items-center justify-between">
        <Heading
          title={`Orders (${data.length})`}
          description="Manage orders for your store"
        />
        <Button onClick={() => router.push(`/${params.storeId}/orders/new`)}>
          <Plus className="mr-2 h-4 w-4" />
          Add New
        </Button>
      </div>
      <Separator />
      <DataTable columns={columns} data={data} searchKey="label" />
      <Heading title="API" description="API calls for Orders" />
      <Separator />
      <ApiList entityName="orders" entityIdName="orderId" />
    </>
  );
};
