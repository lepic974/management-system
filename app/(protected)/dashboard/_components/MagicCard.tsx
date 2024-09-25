import { useTheme } from "next-themes"
import { MagicCard } from "@/components/magicui/magic-card"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function MagicCardDemo() {
	const { theme } = useTheme()

		let title = "Store"
		let description = "Commercez à créer votre store et gérer vos produits."
		let button = "Créer"
		let image = "/Shop.svg"
		let link = "/dashboard/store/create"
		let color = "secondaryNew-light"

	return (
		<div
			className={
				"flex h-[30vh] w-full flex-col gap-4 lg:h-[50vh] lg:flex-row"
			}
		>

			<MagicCard
				className="cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap text-4xl"
				gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
			>
				<div
					className={`flex flex-col w-full h-[50vh] justify-center items-center border-1 border-${color} bg-${color} rounded-md`}
				>
					<Image src={image} alt={title} width={150} height={150} />

					<h3 className="text-2xl text-primary font-bold tracking-tight py-4 px-2">
						Vous n'avez aucun {title} pour le moment !
					</h3>

					<p className="text-sm font-semibold text-primary-light px-2 py-2">
						Commercez à créer votre {title} et gérer vos produits.
					</p>
					<div className={`flex flex-row w-full h-[1px] my-2 bg-${color}`} />

					<Button>
						<Link href={link}>Créer votre {title}</Link>
					</Button>
				</div>
			</MagicCard>
		</div>
	)
}
