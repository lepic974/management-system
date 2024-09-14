"use client"

import { useSession, signOut } from "next-auth/react"
import { useState, useTransition } from "react"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { settings } from "@/actions/settings"
import { useCurrentUser } from "@/hooks/use-current-user"
import { SettingsSchema } from "@/schemas"
import { zodResolver } from "@hookform/resolvers/zod"

import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form"

import { FormError } from "@/components/auth/form-error"
import { FormSuccess } from "@/components/auth/form-success"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { UserRole } from "@prisma/client"

export const SettingsPage = () => {

	const user = useCurrentUser()
	const [success, setSuccess] = useState<string | undefined>()
	const [error, setError] = useState<string | undefined>()

	const { update } = useSession()
	const [isPending, startTransition] = useTransition()

	const form = useForm<z.infer<typeof SettingsSchema>>({
		resolver: zodResolver(SettingsSchema),
		defaultValues: {
			name: user?.name || undefined,
			email: user?.email || undefined,
			role: user?.role || undefined,
			password: undefined,
			newPassword: undefined,
			isTwoFactorEnabled: user?.isTwoFactorEnabled || undefined
		},
	})

	const onSubmit = (values: z.infer<typeof SettingsSchema>) => {
		startTransition(() => {
			settings(values)
				.then((data) => {
					if (data.error) {
						setError(data.error)
					}

					if (data.success) {
						update()
						setSuccess(data.success)
					}
				})
				.catch(() => setError("Something went wrong!"))
		})
	}

	return (
		
		<Card className="w-[600px]">
			<CardHeader>
				<p className="text-2xl font-semibold text-center">⚙️ Settings</p>
			</CardHeader>
			<CardContent>
				<Form {...form}>
					<form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
						<div className="space-y-4">
							<FormField
								control={form.control}
								name="name"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Name</FormLabel>
										<FormControl>
											<Input
												{...field}
												placeholder="Joha Doe"
												disabled={isPending}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>

							{user?.isOAuth === false && (
								<>
									<FormField
										control={form.control}
										name="email"
										render={({ field }) => (
											<FormItem>
												<FormLabel>Email</FormLabel>
												<FormControl>
													<Input
														{...field}
														placeholder="john.doe@gmail.com"
														disabled={isPending}
														type="email"
													/>
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>

									<FormField
										control={form.control}
										name="password"
										render={({ field }) => (
											<FormItem>
												<FormLabel>Password</FormLabel>
												<FormControl>
													<Input
														{...field}
														placeholder="••••••••••"
														disabled={isPending}
														type="password"
													/>
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>

									<FormField
										control={form.control}
										name="newPassword"
										render={({ field }) => (
											<FormItem>
												<FormLabel>New Password</FormLabel>
												<FormControl>
													<Input
														{...field}
														placeholder="••••••••••"
														disabled={isPending}
														type="password"
													/>
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>
								</>
							)}

							<FormField
								control={form.control}
								name="role"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Role</FormLabel>

										<Select
											disabled={isPending}
											onValueChange={field.onChange}
											defaultValue={field.value}
										>
											<FormControl>
												<SelectTrigger>
													<SelectValue placeholder="Selct a role" />
												</SelectTrigger>
											</FormControl>

											<SelectContent>
												<SelectItem value={UserRole.ADMIN}>Admin</SelectItem>

												<SelectItem value={UserRole.USER}>User</SelectItem>
											</SelectContent>
										</Select>

										<FormMessage />
									</FormItem>
								)}
							/>

							{user?.isOAuth === false && (
								<FormField
									control={form.control}
									name="isTwoFactorEnabled"
									render={({ field }) => (
										<FormItem className="flex flex-row items-center justify-between rounded-lg p-3 border shadow-sm">
											<div className="space-y-0 5">
												<FormLabel> 2FA parameter</FormLabel>
												<FormDescription>
													Enable two factor authentication for your account
												</FormDescription>
											</div>
											<FormControl>
												<Switch />
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
							)}
						</div>
						<FormSuccess message={success} />
						<FormError message={error} />

						<Button type="submit" disabled={isPending}>
							Save
						</Button>
					</form>
				</Form>
			</CardContent>
		</Card>
	)
}

export default SettingsPage
