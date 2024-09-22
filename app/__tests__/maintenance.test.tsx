import React from "react"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"

import MaintenancePage from "../(home)/maintenance"
import { clear } from "console"

describe("Maintenance Page", () => {
	it("affiche correctement le contenu de la page de maintenance", () => {
		render(<MaintenancePage />)

		// Vérifier que le titre est affiché
		const heading = screen.getByText("🚧 Site en Construction 🚧")
		expect(heading).toBeInTheDocument()

		// Vérifier que les autres éléments sont affichés
		const message = screen.getByText(
			"Nous travaillons dur pour vous apporter une nouvelle expérience."
		)
		expect(message).toBeInTheDocument()

		const secondMessage = screen.getByText("Revenez bientôt !")
		expect(secondMessage).toBeInTheDocument()
	})
})
