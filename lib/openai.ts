import OpenAI from "openai"

const openAIKey = process.env.OPENAI_API_KEY

if (!openAIKey) {
	throw new Error("OPENAI_API_KEY is not defined!")
}

export const openai = new OpenAI({
	apiKey: openAIKey,
})
