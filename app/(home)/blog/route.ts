import { articles } from "@/data/articles.data"

export async function GET() {
	return Response.json(articles)
}

export const POST = async (request: Request) => {
	const article = await request.json()
	const newArticle = {
		id: articles.length + 1,
		title: article.title,
		desc: article.desc,
		imageUrl: article.imageUrl,
		author: article.author,
		createddAt: new Date().toISOString(),
		updateddAt: new Date().toISOString(),
		comments: [],
	}
	articles.push(newArticle)

	return new Response(JSON.stringify(newArticle), {
		headers: {
			"Content-Type": "application/json",
		},
		status: 201,
	})
}
