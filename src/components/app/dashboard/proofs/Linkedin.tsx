import { Linkedin as LinkedinIcon } from "lucide-react"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
} from "@/components/ui/card"

export function LinkedinProof() {
  return (
    <Card className="w-[300px]">
      <CardHeader className="flex flex-row items-center gap-2">
        <LinkedinIcon className="w-6 h-6" />
        <h3 className="text-lg font-semibold">LinkedIn</h3>
      </CardHeader>
      
      <CardContent className="flex flex-col gap-2">
        <Button>
          Connect LinkedIn
        </Button>
      </CardContent>

      <CardFooter className="flex flex-col gap-2">
        <div className="flex items-center justify-between w-full">
          <span>LinkedIn Connected</span>
          <Checkbox className="bg-white" />
        </div>
        <div className="flex items-center justify-between w-full">
          <span>LinkedIn Verified</span>
          <Checkbox className="bg-white" />
        </div>
      </CardFooter>
    </Card>
  )
}