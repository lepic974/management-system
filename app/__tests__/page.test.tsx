import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"

import Home from "@/app/(home)/page"
import { useRouter } from "next/navigation"

// Mock du hook useRouter de Next.js
jest.mock("next/navigation", () => ({
	useRouter: jest.fn(),
}))

describe("Home Page", () => {
	it("redirige vers la page de maintenance si le mode maintenance est activé", () => {
		// Simuler l'environnement de maintenance
		process.env.NEXT_PUBLIC_MAINTENANCE_MODE = "true"

		// Mock du routeur pour la redirection
		const pushMock = jest.fn()
		;(useRouter as jest.Mock).mockReturnValue({ push: pushMock })

		render(<Home />)

		// Vérifier que la redirection vers /maintenance a eu lieu
		expect(pushMock).toHaveBeenCalledWith("/maintenance")
	})

	it("affiche la page d'accueil quand le mode maintenance est désactivé", () => {
		// Désactiver le mode maintenance
		process.env.NEXT_PUBLIC_MAINTENANCE_MODE = "false"

		render(<Home />)

		// Vérifier que la page d'accueil est bien affichée
		const homeHeading = screen.getByText("🏠 Page d'Accueil")
		expect(homeHeading).toBeInTheDocument()
	})

	it("affiche le mode développement si activé", () => {
		// Désactiver le mode maintenance et activer le mode développement
		process.env.NEXT_PUBLIC_MAINTENANCE_MODE = "false"
		process.env.NEXT_PUBLIC_DEVELOPMENT_MODE = "true"

		render(<Home />)

		// Vérifier que le mode développement est affiché
		const devModeMessage = screen.getByText("⚙️ Mode Développement Activé")
		expect(devModeMessage).toBeInTheDocument()
	})
})
