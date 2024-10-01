import { PrismaClient } from "@prisma/client"
import { resetDatabase } from "./helper.test"

const prisma = new PrismaClient()

describe("User Integration Tests", () => {
	beforeEach(async () => {
		await resetDatabase()
	})

	afterAll(async () => {
		await prisma.$disconnect()
	})

	it("should create a user without affecting other parts of the system", async () => {
		// Créer un utilisateur
		const user = await prisma.user.create({
			data: {
				name: "Test User",
				email: "test@example.com",
			},
		})

		expect(user).toBeDefined()
		expect(user.name).toBe("Test User")

		// Vérifier que la création de l'utilisateur n'a pas affecté d'autres tables
		const postCount = await prisma.post.count()
		expect(postCount).toBe(0)

		// Vous pouvez ajouter d'autres vérifications ici pour s'assurer
		// que d'autres parties du système ne sont pas affectées
	})

	it("should update a user without side effects", async () => {
		// Créer un utilisateur
		const user = await prisma.user.create({
			data: {
				name: "Original Name",
				email: "original@example.com",
			},
		})

		// Mettre à jour l'utilisateur
		const updatedUser = await prisma.user.update({
			where: { id: user.id },
			data: { name: "Updated Name" },
		})

		expect(updatedUser.name).toBe("Updated Name")

		// Vérifier que la mise à jour n'a pas créé de doublons
		const userCount = await prisma.user.count()
		expect(userCount).toBe(1)

		// Vérifier que d'autres tables n'ont pas été affectées
		const postCount = await prisma.post.count()
		expect(postCount).toBe(0)
	})
})
