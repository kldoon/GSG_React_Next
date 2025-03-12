import { getNewsArticle } from "@/services/news.service";
import { NextRequest, NextResponse } from "next/server";

const GET = async (request: NextRequest, { params }: { params: { slug: string } }) => {
  const slug = (await params).slug;

  const article = getNewsArticle(slug);
  if (!article) {
    return new NextResponse('Article Not found', { status: 404 });
  }

  return NextResponse.json(
    article,
    { status: 200 }
  );
}

export { GET };