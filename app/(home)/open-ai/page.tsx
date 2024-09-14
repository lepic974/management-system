"use client"

import { Sparkles } from "lucide-react"
import { useState } from "react"

export default function OpenaiPage() {
	const [htmlCode, setHtmlCode] = useState("")
	const [loading, setLoading] = useState(false)

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		if (loading) return

		const formData = new FormData(e.currentTarget)

		const prompt = formData.get("prompt") as string

		setLoading(true)
		setHtmlCode("")

		const result = await fetch("/api/(openai)/tailwind", {
			method: "POST",
			body: JSON.stringify({ prompt }),
		})

		const body = result.body

		if (!body) {
			alert("Something went wrong!")
			return
		}

		const reader = body.getReader()

		const readChunk = async () => {
			const { done, value } = await reader.read()

			if (done) {
				setLoading(false)
				return
			}

			const chunk = new TextDecoder().decode(value)
			setHtmlCode((prev) => prev + chunk)
			await readChunk()
		}

		await readChunk()

		// setHtmlCode(json.code)
	}

	return (
		<main className="h-full relative">
			{loading ? (
				<div className="absolute top-4 left-0 right-0 flex items-center justify-center">
					<progress className="progress w-56" />
				</div>
			) : null}

			<pre>{htmlCode}</pre>
      {htmlCode ? (
        <iframe
          className="h-full w-full"
          srcDoc={`<!DOCTYPE html>
            <html lang="en">
              <head>
              <meta charset="utf-8" />
              <meta name "viewport" content="width-device-width, initial-scale=1" />
              <link rel="stylesheet" href="https://cdn.tailwindcss.com" />
              </head>
              <body>
                ${htmlCode}
              </body>
            </html>
          `}
        
        />
      ) : null}

			<div className="" dangerouslySetInnerHTML={{ __html: htmlCode }} />

			<div className="fixed bottom-4 left-0 right-0 flex items-center justify-center">
				<form
					onSubmit={handleSubmit}
					className="p-4 bg-secondaryNew-dark max-w-lg file:w-full"
				>
					<fieldset className="flex gap-4 items-start">
						<textarea
							name="prompt"
							className="w-full textarea textarea-primary"
						/>
						<button className="btn btn-primary btn-sm" type="submit">
							<Sparkles size={20} />
						</button>
					</fieldset>
				</form>
			</div>
		</main>
	)
}
