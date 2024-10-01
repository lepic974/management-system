import { NextResponse } from "next/server"
import { db } from "@/lib/db"
import { auth } from "@/auth"
import { Prisma, Store } from "@prisma/client"

// Get a single store or all stores
export async function GET(req: Request) {
	const session = await auth()

	if (!session?.user) {
		return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
	}

	const { searchParams } = new URL(req.url)
	const storeId = searchParams.get("id")

	try {
		if (storeId) {
			// Get a single store
			const store = await db.store.findUnique({
				where: { id: storeId },
			})

			if (!store) {
				return NextResponse.json({ error: "Store not found" }, { status: 404 })
			}

			// Check if the user has permission to view this store
			if (session.user.role !== "ADMIN" && store.userId !== session.user.id) {
				return NextResponse.json({ error: "Unauthorized" }, { status: 403 })
			}

			return NextResponse.json(store)
		} else {
			// Get all stores
			let stores: Store[]
			if (session.user.role === "ADMIN") {
				stores = await db.store.findMany()
			} else {
				stores = await db.store.findMany({
					where: { userId: session.user.id },
				})
			}
			return NextResponse.json(stores)
		}
	} catch (error) {
		console.error("Failed to fetch store(s):", error)
		return NextResponse.json(
			{ error: "Internal Server Error" },
			{ status: 500 }
		)
	}
}

// Create a store
export async function POST(req: Request) {
	const session = await auth()

	if (!session?.user) {
		return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
	}

	try {
		const body = await req.json()
		const newStore = await db.store.create({
			data: {
				...body,
				userId: session.user.id,
			},
		})

		return NextResponse.json(newStore, { status: 201 })
	} catch (error) {
		console.error("Failed to create store:", error)
		return NextResponse.json(
			{ error: "Internal Server Error" },
			{ status: 500 }
		)
	}
}

// Update a store
export async function PUT(req: Request) {
	const session = await auth()

	if (!session?.user) {
		return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
	}

	const { searchParams } = new URL(req.url)
	const storeId = searchParams.get("id")

	if (!storeId) {
		return NextResponse.json({ error: "Store ID is required" }, { status: 400 })
	}

	try {
		const body = await req.json()
		const store = await db.store.findUnique({
			where: { id: storeId },
		})

		if (
			!store ||
			(session.user.role !== "ADMIN" && store.userId !== session.user.id)
		) {
			return NextResponse.json(
				{ error: "Unauthorized or store not found" },
				{ status: 403 }
			)
		}

		const updatedStore = await db.store.update({
			where: { id: storeId },
			data: body,
		})

		return NextResponse.json(updatedStore)
	} catch (error) {
		console.error("Failed to update store:", error)
		return NextResponse.json(
			{ error: "Internal Server Error" },
			{ status: 500 }
		)
	}
}

// Delete a store
export async function DELETE(req: Request) {
	const session = await auth()

	if (!session?.user) {
		return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
	}

	const { searchParams } = new URL(req.url)
	const storeId = searchParams.get("id")

	if (!storeId) {
		return NextResponse.json({ error: "Store ID is required" }, { status: 400 })
	}

	try {
		const store = await db.store.findUnique({
			where: { id: storeId },
		})

		if (
			!store ||
			(session.user.role !== "ADMIN" && store.userId !== session.user.id)
		) {
			return NextResponse.json(
				{ error: "Unauthorized or store not found" },
				{ status: 403 }
			)
		}

		await db.store.delete({
			where: { id: storeId },
		})

		return NextResponse.json({ message: "Store deleted successfully" })
	} catch (error) {
		console.error("Failed to delete store:", error)
		return NextResponse.json(
			{ error: "Internal Server Error" },
			{ status: 500 }
		)
	}
}

// Add this to the end of the file
export const dynamic = "force-dynamic"
