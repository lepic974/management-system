import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"


export default function Custom500() {

  return (
    <Alert>
      <Terminal className="h-4 w-4" />
      <AlertTitle>Error 500</AlertTitle>
      <AlertDescription>
        <h1>500 - Server-side error occurred</h1>
      </AlertDescription>
    </Alert>
  )
}