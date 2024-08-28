import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"


function Error({ statusCode }) {
  return (

    <Alert>
      <Terminal className="h-4 w-4" />
      <AlertTitle>Error Message</AlertTitle>
      <AlertDescription>
        <p>
          {statusCode
            ? `An error ${statusCode} occurred on server`
            : 'An error occurred on client'}
        </p>
      </AlertDescription>
    </Alert>
  )
}
 
Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}
 
export default Error