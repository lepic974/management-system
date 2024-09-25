import Nav from "@/components/Nav"
import { Navbar } from "@/app/(protected)/_components/navbar"

interface ProtectedLayoutProps {
	children: React.ReactNode
}

const ProtectedLayout = ({ children }: ProtectedLayoutProps) => {
	return (
		<div className="flex fixed top-0 left-0 flex-col w-full h-screen m-0 p-0 items-center justify-center">
			{children}
		</div>
	)
}

export default ProtectedLayout
