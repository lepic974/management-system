import { openai } from "@/lib/openai"
import { NextResponse } from "next/server"
import {OpenAIStream, StreamingTextResponse } from "ai"
import OpenAI from "openai"

const systemPrompt = `
	Context:
	You are Tailwind-GPT, an AI text generator that writes Tailwind code.

	Goal:
	Generate a VALID HTML code with VALID Tailwind classess based on the given prompt.

	Criteria:
	* You generate HTML code ONLY.

	Response format:
	You generate only plain html text.

`

export const POST = async (req: Request) => {
	const prompt = await req.json()

	const response = await openai.chat.completions.create({
		model: "gpt-4-1106-preview",
		stream: true,
		messages: [
			{
				role: "assistant",
				content: systemPrompt,
			},
			{
				role: "user",
				content: prompt,
			},
		],
	})

	const stream = OpenAIStream(response)

	return new StreamingTextResponse(stream)
}
