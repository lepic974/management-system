"use client"

import { FormSuccess } from "@/components/auth/form-success"
import { RoleGate } from "@/components/auth/role-gate"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { useCurrentRole } from "@/hooks/use-current-role"
import { UserRole } from "@prisma/client"
import { toast } from "sonner"
import { admin } from "@/actions/admin"

const AdminPage = async () => {
	const role = useCurrentRole()

  const onApiRouteClick = () => {
    fetch("/api/admin")
    .then((response) => {
      if(response.ok) {
        toast.success("Allowed API route!")
      } else {
        toast.error("Forbidden API Route!")
      }
    })
  }

  const onServerActionClick = () => {
    admin().then(data => {
      if(data.error) {
        toast.error(data.error)
      }
      if(data.success) {
        toast.success(data.success)
      }
    })
  }

	return (
		<Card className="w-[600px]">
			<CardHeader>
				<p className="text-2xl font-semibold text-center">🔑 Admin</p>
			</CardHeader>
			<CardContent className="space-y-4">
				Current role: {role}
				<RoleGate allowedRole={UserRole.ADMIN}>
					<FormSuccess message="You are allowed to see this content!" />
				</RoleGate>

        <div className="flex flex-row items-center justify-between rounded-lg border p-3 font-medium">
          <p className="text-sm font-medium">Admin-only API route</p>
          <Button onClick={onApiRouteClick}>
            Click to test
          </Button>
        </div>

        <div className="flex flex-row items-center justify-between rounded-lg border p-3 font-medium">
          <p className="text-sm font-medium">Admin-only Server Actione</p>
          <Button onClick={onServerActionClick}>
            Click to test
          </Button>
        </div>

			</CardContent>
		</Card>
	)
}

export default AdminPage
