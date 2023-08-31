import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function POST(
  req: Request,
  { params }: { params: { storeId: string } }
) {
  try {
    const { userId } = auth();
    const body = await req.json();
    const { label, imageUrl } = body;

    if (!userId) {
      return new NextResponse("Unauthenticated.", { status: 401 });
    }
    if (!label) {
      return new NextResponse("Label is required.", { status: 400 });
    }
    if (!imageUrl) {
      return new NextResponse("Image URL is required.", { status: 400 });
    }

    if (!params.storeId) {
      return new NextResponse("Store id is required.", { status: 400 });
    }

    const billboard = await prismadb.billboard.create({
      data: {
        label,
        imageUrl,
        storeId: params.storeId,
      },
    });

    return NextResponse.json(billboard, { status: 200 });
  } catch (error) {
    console.log("[STORE_PATCH]", error);
    return new NextResponse("Internal error.", { status: 500 });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { storeId: string } }
) {
  try {
    const { userId } = auth();

    if (!userId) {
      return new NextResponse("Unauthenticated.", { status: 401 });
    }
    if (!params.storeId) {
      return new NextResponse("Store id is required.", { status: 400 });
    }

    const store = await prismadb.store.deleteMany({
      where: {
        id: params.storeId,
        userId: userId,
      },
    });

    return NextResponse.json(store);
  } catch (error) {
    console.log("[STORE_DELETE]", error);
    return new NextResponse("Internal error.", { status: 500 });
  }
}
