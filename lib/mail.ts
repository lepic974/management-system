import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export const sendVerificationEmail = async (email: string, token: string) => {
	const comfirmLink = `http://localhost:3000/auth/new-verification?token=${token}`

	await resend.emails.send({
		from: "onboarding@resend.com",
		to: email,
		subject: "Comfirm your e-mail",
		html: `<p>Click <a href="${comfirmLink}"here</a> to comfirm email.</p>`,
	})
}
