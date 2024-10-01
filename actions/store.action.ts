"use server"

import { NextResponse } from "next/server"
import { db } from "@/lib/db"
import { auth } from "@/auth"
import { revalidatePath } from "next/cache"

// Assurez-vous que le modèle Store est correctement importé de votre schéma Prisma
import { Store } from "@prisma/client"

// Get a single store
async function getStore(storeId: string) {
	const session = await auth()

	if (!session?.user) {
		throw new Error("Unauthorized")
	}

	try {
		const store = await db.store.findUnique({
			where: { id: storeId },
		})

		if (!store) {
			throw new Error("Store not found")
		}

		// Check if the user has permission to view this store
		if (session.user.role !== "ADMIN" && store.userId !== session.user.id) {
			throw new Error("Unauthorized")
		}

		return store
	} catch (error) {
		console.error("Failed to fetch store:", error)
		throw new Error("Failed to fetch store")
	}
}

// Get all stores
async function getAllStores() {
	const session = await auth()

	if (!session?.user) {
		throw new Error("Unauthorized")
	}

	try {
		let stores: Store[]
		if (session.user.role === "ADMIN") {
			stores = await db.store.findMany()
		} else {
			stores = await db.store.findMany({
				where: { userId: session.user.id },
			})
		}
		return stores
	} catch (error) {
		console.error("Failed to fetch stores:", error)
		throw new Error("Failed to fetch stores")
	}
}

// Create a store
async function createStore(
	storeData: Omit<Store, "id" | "createdAt" | "updatedAt">
) {
	const session = await auth()

	if (!session?.user) {
		throw new Error("Unauthorized")
	}

	try {
		const newStore = await db.store.create({
			data: {
				...storeData,
				userId: session.user.id,
			},
		})

		revalidatePath("/dashboard/store")
		return newStore
	} catch (error) {
		console.error("Failed to create store:", error)
		throw new Error("Failed to create store")
	}
}

// Update a store
async function updateStore(storeId: string, storeData: Partial<Store>) {
	const session = await auth()

	if (!session?.user) {
		throw new Error("Unauthorized")
	}

	try {
		const store = await db.store.findUnique({
			where: { id: storeId },
		})

		if (
			!store ||
			(session.user.role !== "ADMIN" && store.userId !== session.user.id)
		) {
			throw new Error("Unauthorized or store not found")
		}

		const updatedStore = await db.store.update({
			where: { id: storeId },
			data: storeData,
		})

		revalidatePath("/dashboard/store")
		return updatedStore
	} catch (error) {
		console.error("Failed to update store:", error)
		throw new Error("Failed to update store")
	}
}

// Delete a store
async function deleteStore(storeId: string) {
	const session = await auth()

	if (!session?.user) {
		throw new Error("Unauthorized")
	}

	try {
		const store = await db.store.findUnique({
			where: { id: storeId },
		})

		if (
			!store ||
			(session.user.role !== "ADMIN" && store.userId !== session.user.id)
		) {
			throw new Error("Unauthorized or store not found")
		}

		await db.store.delete({
			where: { id: storeId },
		})

		revalidatePath("/dashboard/store")
		return { message: "Store deleted successfully" }
	} catch (error) {
		console.error("Failed to delete store:", error)
		throw new Error("Failed to delete store")
	}
}

export { getStore, getAllStores, createStore, updateStore, deleteStore }
