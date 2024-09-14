import { Inter } from "next/font/google"
import "../../globals.css"
import {
	ResizableHandle,
	ResizablePanel,
	ResizablePanelGroup,
} from "@/components/ui/resizable"

const NavLink = [
	{ label: "Login", href: "/login" },
	{ label: "Password", href: "/password" },
	{ label: "Forgot Paaword", href: "/forgot-password" },
	{ label: "Register", href: "/register" },
]

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
	title: "Dashboard page",
	description: "Administrator manage app",
}

export default function DashboardLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<main>
			{/* <ResizablePanelGroup
      direction="horizontal"
      className="max-w-md rounded-lg border md:min-w-[450px]"
    >
      <ResizablePanel defaultSize={50}>
        <div className="flex h-[200px] items-center justify-center p-6">
          <span className="font-semibold">One</span>
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={50}>
        <ResizablePanelGroup direction="vertical">
          <ResizablePanel defaultSize={25}>
            <div className="flex h-full items-center justify-center p-6">
              <span className="font-semibold">Two</span>
            </div>
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={75}>
            <div className="flex h-full items-center justify-center p-6">
              <span className="font-semibold">Three</span>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>
    </ResizablePanelGroup> */}

			<section className={`${inter.className}`}>{children}</section>
		</main>
	)
}
