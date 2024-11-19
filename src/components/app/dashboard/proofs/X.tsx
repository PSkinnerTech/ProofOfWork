import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faXTwitter } from "@fortawesome/free-brands-svg-icons"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
} from "@/components/ui/card"

export function XProof() {
  return (
    <Card className="w-[300px]">
      <CardHeader className="flex flex-row items-center gap-2">
        <FontAwesomeIcon 
          icon={faXTwitter} 
          className="w-6 h-6"
        />
        <h3 className="text-lg font-semibold">X</h3>
      </CardHeader>
      
      <CardContent className="flex flex-col gap-2">
        <Button>
          Connect X
        </Button>
      </CardContent>

      <CardFooter className="flex flex-col gap-2">
        <div className="flex items-center justify-between w-full">
          <span>X Connected</span>
          <Checkbox className="bg-white" />
        </div>
        <div className="flex items-center justify-between w-full">
          <span>X Verified</span>
          <Checkbox className="bg-white" />
        </div>
      </CardFooter>
    </Card>
  )
}