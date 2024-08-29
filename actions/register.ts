"use server"

import { getUserByEmail } from "@/data/user"
import { db } from "@/lib/db"
import { RegisterSchema } from "@/schemas"
import bcrypt from "bcryptjs"
import * as z from "zod"

export const register = async (values: z.infer<typeof RegisterSchema>) => {
	const validatedField = RegisterSchema.safeParse(values)

	if (!validatedField.success) {
		return { error: "Invalid field!" }
	}

	const { email, password, name } = validatedField.data
	const hashedPassword = await bcrypt.hash(password, 10)

	const existingUser = await getUserByEmail(email)

	if(existingUser) {
		return { error: "Email already in use!"}
	}

	await db.user.create({
		data: {
			name,
			email,
			password: hashedPassword
		}
	})

	// TODO: Send verification token email

	return { success: "User created successful!" }
}
