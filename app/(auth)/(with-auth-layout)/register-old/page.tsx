"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import CustomFormField from "@/components/CustomFormField";
import ClientForm from "@/components/forms/ClientForm";
import { Home } from "lucide-react";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  username: z.string().min(2).max(50),
});

const RegisterPage = () => {
  const handleClick = {};
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div className="flex flex-col w-[500px] h-[50vh] items-center justify-center mx-auto bg-green-400 rounded-xl mt-10">
      <Home className="my-2 text-white" size={28} />
      <h1 className="header flex text-4xl text-white">Register Page</h1>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="shadcn" {...field} />
                </FormControl>
                <FormDescription>
                  This is your public display name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>

      <CustomFormField control={form.control} />
      <ClientForm />

      <Button variant={"outline"} className="flex items-center mt-4 mx-auto">
        <Home className="my-2 mr-2" size={18} />
        Go to Home
      </Button>
    </div>
  );
};

export default RegisterPage;
