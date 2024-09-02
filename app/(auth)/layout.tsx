interface AuthLayoutProps {
	children: React.ReactNode
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
	return (
		<div className="flex h-screen flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800">
			{/* <nav className="bg-red-500 text-white">This is without / auth prefix</nav> */}

			{children}
		</div>
	)
}

export default AuthLayout
