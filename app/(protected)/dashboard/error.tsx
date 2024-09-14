"use client"; // Error boundaries must be Client Components

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const router = useRouter();

  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="h-full flex flex-col justify-center items-center px-20 py-20">
      <Card className="flex-col w-[600px]">
        <CardHeader>
          <CardTitle>Something went wrong!</CardTitle>
          <CardDescription>Désolé, il ya eu une erreur.</CardDescription>
        </CardHeader>
        <CardContent>
          <Button variant="link" onClick={() => reset()}>
            Try again
          </Button>
          <Button
            variant="outline"
            onClick={
              // Attempt to recover by trying to re-render the segment
              () => router.push("/")
            }
          >
            Go to home
          </Button>
        </CardContent>
        <CardFooter>
          <p className="text-sm text-muted">2024 © YaniPay</p>
        </CardFooter>
      </Card>

      <h2 className="text-2xl font-semibold"></h2>
    </div>
  );
}
