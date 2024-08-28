import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"


export default function Custom404() {

  return (
    <Alert>
      <Terminal className="h-4 w-4" />
      <AlertTitle>Error 404</AlertTitle>
      <AlertDescription>
        <h1>404 - Page Not Found</h1>      
      </AlertDescription>
    </Alert>
  )
}