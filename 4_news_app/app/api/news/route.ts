import { NextResponse } from "next/server";

const GET = async () => {
  const news = ['aaaaaa', 'bbbbbbbb', 'ccccccccc'];

  return NextResponse.json({ newsList: news }, { status: 200 });
}

const POST = async () => {

}

export {
  GET, POST
}