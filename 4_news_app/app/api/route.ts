export async function GET() {
  console.log("Hello from the '/' route");

  // return new Response("Hello from the '/' route", { status: 200 });
  return Response.json({ message: "Hello from the '/' route" }, {
    status: 404
  });
}




// api/

// Better convention
// [GET] /api/news
// [GET] /api/news/city-marathon-2025
// [POST] /api/news
// [PUT] /api/news
// [DELETE] /api/news

// Bad convention
// api/get-news
// api/add-news
// api/update-news
// api/delete-news

// api/users
