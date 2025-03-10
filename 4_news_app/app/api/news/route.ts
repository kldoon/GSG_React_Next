import { ALLOWED_CATEGORIES } from "@/constants/data";
import { getNewsByCategory } from "@/services/news.service";
import { NextRequest, NextResponse } from "next/server";

const GET = async (request: NextRequest) => {
  const params = request.nextUrl.searchParams;
  const category = params.get('category') || 'global';

  if (!ALLOWED_CATEGORIES.includes(category)) {
    return NextResponse.json(null, { status: 400, statusText: "Unknown category" });
  }

  const news = getNewsByCategory(category);
  return NextResponse.json({ results: news }, { status: 200 });
}

const POST = async (request: NextRequest) => {
  console.log(await request.json())
  return NextResponse.json({
    msg: "Item Added"
  }, { status: 201 });
}

export {
  GET, POST
}